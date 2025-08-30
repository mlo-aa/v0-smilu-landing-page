"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#f5f3f0]">
      <div className="px-6 py-8">
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
                    <a href="#" className="hover:opacity-70" onClick={() => setIsMenuOpen(false)}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:opacity-70" onClick={() => setIsMenuOpen(false)}>
                      Make a change
                    </a>
                  </li>
                  <li>
                    <button onClick={scrollToBottom} className="hover:opacity-70 text-left">
                      Contact
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}

        {/* First Section - Main Content */}
        <div className="flex items-center justify-between max-w-7xl mx-auto min-h-[80vh]">
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
            <div className="w-[500px] h-[300px] bg-black rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="px-6 py-16 min-h-screen flex flex-col justify-between">
        {/* Main content area */}
        <div className="flex items-center justify-between max-w-7xl mx-auto flex-1">
          {/* Left Side - Statistics Card */}
          <div className="flex-1 max-w-xs">
            <div className="relative">
              {/* Statistics card */}
              <div className="border-2 border-black rounded-2xl p-8 bg-white">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-black">+120</div>
                    <div className="text-lg text-black">toys delivered</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-black">+5</div>
                    <div className="text-lg text-black">communities</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-black">+5</div>
                    <div className="text-lg text-black">partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Mission Text */}
          <div className="flex-1 max-w-2xl ml-16">
            <h2 className="text-[#8b6f47] text-5xl font-bold mb-8 leading-tight">One chain, endless smile</h2>
            <p className="text-[#8b6f47] text-xl font-light leading-relaxed">
              1 in 3 children in Costa Rica live in poverty. In the first year, Smilu aim to create global smiles.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center space-y-8 mt-16">
          {/* Social Icons */}
          <div className="flex items-center space-x-8">
            {/* Twitter/X Icon */}
            <a
              href="https://x.com/smilurefi?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-[#a8d5d8] rounded-full flex items-center justify-center hover:bg-[#96c9cc] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  fill="white"
                />
              </svg>
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/smilurefi?igsh=MXY2dnFmYnRzdmFiMg=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-[#a8d5d8] rounded-full flex items-center justify-center hover:bg-[#96c9cc] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="white" strokeWidth="2" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" />
              </svg>
            </a>

            {/* Email Icon */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=smilurefi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-[#a8d5d8] rounded-full flex items-center justify-center hover:bg-[#96c9cc] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  stroke="white"
                  strokeWidth="2"
                />
                <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" />
              </svg>
            </a>
          </div>

          {/* Copyright text */}
          <p className="text-[#8b6f47] text-sm text-center">
            © 2025 Smilu • ReFi for childhood • On-chain proof of joy
          </p>
        </div>
      </div>
    </div>
  )
}
