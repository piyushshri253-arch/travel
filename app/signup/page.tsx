"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage("❌ " + (data.message || "Signup failed"));
        setLoading(false);
        return;
      }

      setMessage("✅ Account created successfully!");

      // Redirect to login
      setTimeout(() => {
        router.push("/login");
      }, 1500);

    } catch (error) {
      setMessage("❌ Server not reachable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-[#0f0f1a] text-white">
      
      {/* LEFT IMAGE SECTION */}
      <div
        className="relative hidden md:flex flex-col justify-between p-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        <div className="relative z-10">
          <h2 className="text-2xl font-bold tracking-wide">Travel Rewards</h2>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-6">

          {/* Header */}
          <div>
            <h1 className="text-3xl font-semibold">Create an account</h1>
            <p className="text-sm text-gray-400 mt-1">
              Already have an account?{" "}
              <Link href="/login" className="text-purple-400 hover:underline">
                Log in
              </Link>
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSignup} className="space-y-4">

            {/* First & Last Name */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-[#1b1b2b] border border-white/10 rounded-lg px-4 py-3"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-[#1b1b2b] border border-white/10 rounded-lg px-4 py-3"
                required
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#1b1b2b] border border-white/10 rounded-lg px-4 py-3"
              required
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#1b1b2b] border border-white/10 rounded-lg px-4 py-3"
              required
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg disabled:opacity-50"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          {/* Message */}
          {message && (
            <p className="text-center text-sm mt-2 text-green-400">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}