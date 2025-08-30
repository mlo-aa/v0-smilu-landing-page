"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f5f3f0] px-6 py-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-16">
        <div className="text-[#8b6f47] text-4xl font-bold">Smilu</div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col gap-1 p-2 hover:opacity-70 transition-opacity"
          aria-label="Toggle menu"
        >
          <div className="w-8 h-0.5 bg-[#8b6f47]"></div>
          <div className="w-8 h-0.5 bg-[#8b6f47]"></div>
          <div className="w-8 h-0.5 bg-[#8b6f47]"></div>
        </button>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed right-0 top-0 h-full w-80 bg-[#f5f3f0] shadow-lg p-8">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-[#8b6f47] text-2xl">
              ×
            </button>
            <nav className="mt-16">
              <ul className="space-y-6 text-[#8b6f47] text-lg">
                <li>
                  <a href="#" className="hover:opacity-70">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Side Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-[#8b6f47] text-6xl font-bold mb-4 leading-tight">Their smile starts with you.</h1>
          <p className="text-[#8b6f47] text-xl mb-12 font-light">One click, one token, one smile.</p>

          <Button className="bg-[#a8d5d8] hover:bg-[#96c9cc] text-white px-8 py-6 rounded-full text-lg font-medium flex items-center gap-2">
            Make a change
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>

        {/* Right Side - Video Placeholder */}
        <div className="flex-1 flex items-center justify-end">
          {/* Black Video Placeholder */}
          <div className="w-[500px] h-[300px] bg-black rounded-2xl"></div>
        </div>
      </div>
    </div>
  )
}
