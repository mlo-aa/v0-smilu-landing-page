"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple validation - in a real app, you'd authenticate with a backend
    if (email && password) {
      router.push("/dashboard")
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f3f0] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 relative">
          {/* Teddy Bear Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#8b6f47] rounded-2xl flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="3" fill="white" />
                <circle cx="16" cy="8" r="3" fill="white" />
                <circle cx="12" cy="14" r="6" fill="white" />
                <circle cx="10" cy="12" r="1" fill="#8b6f47" />
                <circle cx="14" cy="12" r="1" fill="#8b6f47" />
                <path d="M11 15 Q12 16 13 15" stroke="#8b6f47" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>

          {/* Smilu Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agregar%20un%20subt%C3%ADtulo%20%282%29-75jPo6UeWy3HJc1BvNOXe3xsZkNOUZ.png"
              alt="Smilu"
              className="h-12 w-auto"
            />
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 bg-[#a8d5d8] rounded-full text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-[#96c9cc] transition-all duration-200"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 bg-[#a8d5d8] rounded-full text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-[#96c9cc] transition-all duration-200"
                required
              />
            </div>

            {/* Login Button */}
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-[#b8e6b8] hover:bg-[#a8d6a8] text-[#4a5c4a] py-4 rounded-full text-lg font-medium transition-all duration-200"
              >
                Log In
              </Button>
            </div>
          </form>

          {/* Forgot Password Link */}
          <div className="text-center mt-6">
            <button className="text-[#8b6f47] text-sm hover:underline">I forgot my password</button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-[#8b6f47] text-sm">
            © 2025{" "}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agregar%20un%20subt%C3%ADtulo%20%282%29-75jPo6UeWy3HJc1BvNOXe3xsZkNOUZ.png"
              alt="Smilu"
              className="inline h-4 w-auto"
            />{" "}
            • ReFi for childhood • On-chain proof of joy
          </p>
        </div>
      </div>
    </div>
  )
}
