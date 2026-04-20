"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Blog {
  id: number;
  title: string;
  content: string;
  featured_image: string;
  created_at: string;
}

interface PageProps {
  params: { slug: string };
}

export default function BlogDetail({ params }: PageProps) {
  const [blog, setBlog] = useState<Blog | null>(null);

  const fetchBlog = async () => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", params.slug)
      .single();

    if (error) return alert(error.message);
    setBlog(data as Blog);
  };

  useEffect(() => {
    fetchBlog();
  }, [params.slug]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img
        src={blog.featured_image}
        alt={blog.title}
        className="w-full h-80 object-cover rounded mb-4"
      />
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
}