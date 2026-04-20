"use client";
import { useEffect, useState } from "react";
import BlogForm from "@/components/BlogForm";
import { supabase } from "@/lib/supabaseClient";

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  keywords: string[];
  meta: string;
  featured_image: string;
  created_at: string;
}

export default function BlogDashboard({ user }: { user: any }) {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    const { data, error } = await supabase.from("blogs").select("*").order("created_at", { ascending: false });
    if (error) return console.error(error);
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Dashboard</h1>
      <BlogForm refreshBlogs={fetchBlogs} />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Your Blogs</h2>
        {blogs.map((blog) => (
          <div key={blog.id} className="p-4 mb-3 border rounded">
            <h3 className="font-bold">{blog.title}</h3>
            <p className="text-sm text-gray-500">{new Date(blog.created_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}