"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import BlogForm from "@/components/BlogForm";

export default function BlogDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error(error);
        router.push("/blog-dashboard/login");
        return;
      }

      if (!data.session) {
        router.push("/blog-dashboard/login");
      } else {
        setUser(data.session.user);
      }

      setLoading(false);
    };

    checkSession();
  }, [router]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null; // Redirecting to login

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Dashboard</h1>
      <BlogForm refreshBlogs={() => {}} />
      {/* You can add your blogs list here */}
    </div>
  );
}