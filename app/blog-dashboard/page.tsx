"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import LoginForm from "@/components/LoginForm";
import BlogForm from "@/components/BlogForm";

export default function BlogDashboardPage() {
  const [user, setUser] = useState<any>(null);

  // Check session on mount
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user || null));

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const refreshBlogs = () => {
    // Optional: reload blogs list
  };

  if (!user)
    return <LoginForm onLogin={() => supabase.auth.getSession().then(({ data }) => setUser(data.session?.user))} />;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Blog Dashboard</h1>
      <BlogForm refreshBlogs={refreshBlogs} />
    </div>
  );
}