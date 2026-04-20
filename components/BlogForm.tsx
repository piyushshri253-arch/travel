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

  // Use client-only editor
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editorProps: {},
    immediatelyRender: false, // <-- important for SSR
  });

  if (!editor) return null; // prevent rendering on server

  const handleSubmit = async () => {
    if (!title || !editor.getHTML() || !featuredImage)
      return alert("Please fill all fields");

    const content = editor.getHTML();
    const slug = title.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
    const meta = content.replace(/<[^>]+>/g, "").slice(0, 150);
    const keywords = title.split(" ").map((k) => k.toLowerCase());

    const fileExt = featuredImage.name.split(".").pop();
    const fileName = `${uuidv4()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("blog-images")
      .upload(fileName, featuredImage);
    if (uploadError) return alert(uploadError.message);

    const { data: urlData, error: urlError } = supabase.storage
      .from("blog-images")
      .getPublicUrl(fileName);
    if (urlError) return alert(urlError.message);

    const publicUrl = urlData?.publicUrl;
    if (!publicUrl) return alert("Failed to get image URL");

    const { error: insertError } = await supabase.from("blogs").insert({
      title,
      slug,
      content,
      meta,
      keywords,
      featured_image: publicUrl,
      created_at: new Date().toISOString(),
    });
    if (insertError) return alert(insertError.message);

    setTitle("");
    editor.commands.setContent("");
    setFeaturedImage(null);
    refreshBlogs();
  };

  return (
    <div className="p-4 bg-gray-100 rounded mb-6">
      <h2 className="text-xl font-semibold mb-2">Add New Blog</h2>
      <input
        className="w-full p-2 border rounded mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="mb-2 bg-white rounded border p-2">
        <EditorContent editor={editor} />
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setFeaturedImage(e.target.files ? e.target.files[0] : null)
        }
        className="mb-2"
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        onClick={handleSubmit}
      >
        Publish Blog
      </button>
    </div>
  );
}