"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  meta: string;
  keywords: string[];
  featured_image: string;
  created_at: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) return alert(error.message);
    setBlogs(data as Blog[]);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Latest Blogs</h1>
      <div className="flex flex-col gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded shadow p-4">
            <img
              src={blog.featured_image}
              alt={blog.title}
              className="w-full h-64 object-cover rounded mb-2"
            />
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600 mb-2">{blog.meta}...</p>
            <a href={`/blogs/${blog.slug}`} className="text-blue-600 hover:underline">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}