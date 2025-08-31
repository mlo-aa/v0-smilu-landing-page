"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function TheFirstSmile() {
  const [showCertificate, setShowCertificate] = useState(false)

  return (
    <div className="min-h-screen bg-[#f5f3f0] flex">
      <div className={`${showCertificate ? "blur-sm" : ""} transition-all duration-300 w-full flex`}>
        {/* Left Sidebar */}
        <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-8 space-y-8">
          {/* Teddy Bear Icon */}
          <Link href="/dashboard">
            <div className="w-12 h-12 bg-[#8b6f47] rounded-lg flex items-center justify-center hover:bg-[#bbdce5] transition-colors duration-200 cursor-pointer p-1">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agregar%20un%20subt%C3%ADtulo%20%285%29-G4uEd.png"
                alt="Teddy Bear"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Gift Box Icon */}
          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-[#bbdce5] transition-colors duration-200 cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="8" width="18" height="12" rx="2" stroke="gray" strokeWidth="2" fill="none" />
              <path d="M12 8V20" stroke="gray" strokeWidth="2" />
              <path d="M8 8C8 6 9 4 12 4C15 4 16 6 16 8" stroke="gray" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Palette Icon */}
          <Link href="/art-shelf">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-[#bbdce5] transition-colors duration-200 cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="gray" strokeWidth="2" fill="none" />
                <circle cx="8" cy="8" r="2" fill="gray" />
                <circle cx="16" cy="8" r="2" fill="gray" />
                <circle cx="8" cy="16" r="2" fill="gray" />
              </svg>
            </div>
          </Link>

          {/* Star with Podium Icon */}
          <Link href="/leaderboard">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-[#bbdce5] transition-colors duration-200 cursor-pointer">
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
          </Link>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* User/Settings Icon - Active */}
          <div className="w-12 h-12 bg-[#bbdce5] rounded-lg flex items-center justify-center cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" stroke="#8b6f47" strokeWidth="2" fill="none" />
              <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="#8b6f47" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="flex items-center justify-between px-8 py-6">
            <Link href="/" className="block">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agregar%20un%20subt%C3%ADtulo%20%282%29-75jPo6UeWy3HJc1BvNOXe3xsZkNOUZ.png"
                alt="Smilu"
                className="h-16 w-auto"
              />
            </Link>
            <Link href="/login">
              <Button className="bg-[#b8e6b8] hover:bg-[#a8d6a8] text-[#4a5c4a] px-6 py-2 rounded-full text-sm font-medium">
                Log-In
              </Button>
            </Link>
          </header>

          {/* Main Content Area */}
          <div className="flex-1 px-8 py-8">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-[#55361e] text-4xl font-bold mb-2 text-center font-nunito">The first Smile</h1>
              <p className="text-[#55361e] text-lg mb-12 text-center font-nunito">First smile kit</p>

              <div className="space-y-6 mb-8 flex flex-col items-center">
                {/* Social Certificate Card */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-between w-full max-w-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="16" rx="2" stroke="white" strokeWidth="2" fill="none" />
                        <path d="M7 8h10M7 12h6" stroke="white" strokeWidth="2" />
                        <circle cx="17" cy="16" r="2" stroke="white" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#2c3e50] text-lg font-semibold mb-1">Social certificate</h3>
                      <p className="text-gray-600 text-sm">On-chain document that certifies your verified impact.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowCertificate(true)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    View certificate
                  </button>
                </div>

                {/* Token Benefits Card */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-center space-x-4 w-full max-w-xl">
                  <div className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 2L15 9L22 9L17 14L19 21L12 17L5 21L7 14L2 9L9 9L12 2Z"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path d="M8 17C8 15 10 13 12 13C14 13 16 15 16 17" stroke="white" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      The more Tokens you purchase, the more benefits you will unlock within the community. Your next
                      role is <span className="text-[#8b6f47] font-semibold">Smile Builder</span>, where exclusive
                      rewards await.
                    </p>
                  </div>
                </div>
              </div>

              {/* Teddy Bear Illustration */}
              <div className="flex justify-center">
                <div className="w-48 h-48">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agregar%20un%20subt%C3%ADtulo%20%285%29-G4uEd.png"
                    alt="Teddy Bear"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="px-8 py-6">
            <p className="text-[#8b6f47] text-sm text-center">
              © 2025{" "}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agregar%20un%20subt%C3%ADtulo%20%282%29-75jPo6UeWy3HJc1BvNOXe3xsZkNOUZ.png"
                alt="Smilu"
                className="inline h-4 w-auto"
              />{" "}
              • ReFi for childhood • On-chain proof of joy
            </p>
          </footer>
        </div>
      </div>

      {/* Certificate Popup */}
      {showCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
            >
              ×
            </button>
            <div className="p-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/certificate-of-social-impact-JWEM0D7HwgXktrvMYwWv5YHksvftvC.png"
                alt="Certificate of Social Impact"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
