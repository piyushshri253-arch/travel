"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface BlogFormProps {
  refreshBlogs: () => void;
}

export default function BlogForm({ refreshBlogs }: BlogFormProps) {
  const [title, setTitle] = useState("");
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);

  // Editor (client only)
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editorProps: {},
    immediatelyRender: false,
  });

  if (!editor) return null;

  const handleSubmit = async () => {
    if (!title || !editor.getHTML() || !featuredImage) {
      return alert("Please fill all fields");
    }

    try {
      const content = editor.getHTML();

      const slug = title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

      const meta = content.replace(/<[^>]+>/g, "").slice(0, 150);
      const keywords = title.split(" ").map((k) => k.toLowerCase());

      const fileExt = featuredImage.name.split(".").pop();
      const fileName = `${uuidv4()}.${fileExt}`;

      // 🔥 1. Upload image
      const { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(fileName, featuredImage, {
          upsert: true,
        });

      if (uploadError) throw uploadError;

      // 🔥 2. Get public URL (FIXED PART)
      const { data: urlData } = supabase.storage
        .from("blog-images")
        .getPublicUrl(fileName);

      const publicUrl = urlData?.publicUrl;
      if (!publicUrl) throw new Error("Failed to get image URL");

      // 🔥 3. Insert blog
      const { error: insertError } = await supabase.from("blogs").insert({
        title,
        slug,
        content,
        meta,
        keywords,
        featured_image: publicUrl,
        created_at: new Date().toISOString(),
      });

      if (insertError) throw insertError;

      // 🔥 Reset form
      setTitle("");
      editor.commands.setContent("");
      setFeaturedImage(null);

      refreshBlogs();
      alert("Blog published successfully 🚀");
    } catch (err: any) {
      alert(err.message || "Something went wrong");
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded mb-6">
      <h2 className="text-xl font-semibold mb-2">Add New Blog</h2>

      {/* Title */}
      <input
        className="w-full p-2 border rounded mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Editor */}
      <div className="mb-2 bg-white rounded border p-2">
        <EditorContent editor={editor} />
      </div>

      {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setFeaturedImage(e.target.files ? e.target.files[0] : null)
        }
        className="mb-2"
      />

      {/* Submit */}
      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        onClick={handleSubmit}
      >
        Publish Blog
      </button>
    </div>
  );
}