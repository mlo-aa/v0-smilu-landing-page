"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f5f3f0] flex">
      {/* Left Sidebar */}
      <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-8 space-y-8">
        {/* Teddy Bear Icon */}
        <div className="w-12 h-12 bg-[#8b6f47] rounded-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="3" fill="white" />
            <circle cx="16" cy="8" r="3" fill="white" />
            <circle cx="12" cy="14" r="6" fill="white" />
            <circle cx="10" cy="12" r="1" fill="#8b6f47" />
            <circle cx="14" cy="12" r="1" fill="#8b6f47" />
            <path d="M11 15 Q12 16 13 15" stroke="#8b6f47" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Gift Box Icon */}
        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="8" width="18" height="12" rx="2" stroke="gray" strokeWidth="2" fill="none" />
            <path d="M12 8V20" stroke="gray" strokeWidth="2" />
            <path d="M8 8C8 6 9 4 12 4C15 4 16 6 16 8" stroke="gray" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Palette Icon */}
        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="gray" strokeWidth="2" fill="none" />
            <circle cx="8" cy="8" r="2" fill="gray" />
            <circle cx="16" cy="8" r="2" fill="gray" />
            <circle cx="8" cy="16" r="2" fill="gray" />
          </svg>
        </div>

        {/* Star with Podium Icon */}
        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon
              points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
              stroke="gray"
              strokeWidth="2"
              fill="none"
            />
            <rect x="8" y="18" width="8" height="4" stroke="gray" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* User/Settings Icon */}
        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" stroke="gray" strokeWidth="2" fill="none" />
            <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="gray" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6">
          <Link href="/" className="text-[#8b6f47] text-4xl font-bold">
            Smilu
          </Link>
          <Button className="bg-[#b8e6b8] hover:bg-[#a8d6a8] text-[#4a5c4a] px-6 py-2 rounded-full text-sm font-medium">
            Log-In
          </Button>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-8">
          {/* Golden Token */}
          <div className="w-32 h-32 bg-gradient-to-br from-[#f4d03f] to-[#f39c12] rounded-full flex items-center justify-center mb-8 shadow-lg">
            <div className="w-24 h-24 border-4 border-[#d4ac0d] rounded-full flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="3" fill="#8b4513" />
                <circle cx="16" cy="8" r="3" fill="#8b4513" />
                <circle cx="12" cy="14" r="6" fill="#8b4513" />
                <circle cx="10" cy="12" r="1" fill="white" />
                <circle cx="14" cy="12" r="1" fill="white" />
                <path d="M11 15 Q12 16 13 15" stroke="white" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>

          {/* Token Text */}
          <h1 className="text-[#8b6f47] text-2xl font-bold mb-8">1 Token = 1 New toy delivered</h1>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 mb-12">
            <Button className="bg-[#a8d5d8] hover:bg-[#96c9cc] text-white px-8 py-3 rounded-full text-lg font-medium flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M12 8V20" stroke="currentColor" strokeWidth="2" />
                <path d="M8 8C8 6 9 4 12 4C15 4 16 6 16 8" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              Buy
            </Button>
            <Button className="bg-[#a8d5d8] hover:bg-[#96c9cc] text-white px-8 py-3 rounded-full text-lg font-medium flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  fill="currentColor"
                />
              </svg>
              My smiles
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#8b6f47] text-sm font-medium">3/120 Smiles</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3">
              <div className="bg-[#a8d5d8] h-3 rounded-full" style={{ width: "2.5%" }}></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-8 py-6">
          <p className="text-[#8b6f47] text-sm text-center">
            © 2025 Smilu • ReFi for childhood • On-chain proof of joy
          </p>
        </footer>
      </div>
    </div>
  )
}
