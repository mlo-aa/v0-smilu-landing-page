"use client"

import Link from "next/link"
import { useState } from "react"

export default function ArtShelf() {
  const [showRolesPopup, setShowRolesPopup] = useState(false)

  const toggleRolesPopup = () => {
    setShowRolesPopup(!showRolesPopup)
  }

  const closeRolesPopup = () => {
    setShowRolesPopup(false)
  }

  return (
    <div className="min-h-screen bg-[#f5f3f0] flex">
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

        <Link href="/dashboard">
          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-[#bbdce5] transition-colors duration-200 cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="8" width="18" height="12" rx="2" stroke="gray" strokeWidth="2" fill="none" />
              <path d="M12 8V20" stroke="gray" strokeWidth="2" />
              <path d="M8 8C8 6 9 4 12 4C15 4 16 6 16 8" stroke="gray" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </Link>

        {/* Palette Icon - Active */}
        <div className="w-12 h-12 bg-[#bbdce5] rounded-lg flex items-center justify-center cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#8b6f47" strokeWidth="2" fill="none" />
            <circle cx="8" cy="8" r="2" fill="#8b6f47" />
            <circle cx="16" cy="8" r="2" fill="#8b6f47" />
            <circle cx="8" cy="16" r="2" fill="#8b6f47" />
          </svg>
        </div>

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

        <div className="relative">
          <div
            onClick={toggleRolesPopup}
            className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-[#bbdce5] transition-colors duration-200 cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" stroke="gray" strokeWidth="2" fill="none" />
              <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="gray" strokeWidth="2" />
            </svg>
          </div>

          {/* Roles Popup */}
          {showRolesPopup && (
            <>
              {/* Backdrop to close popup when clicking outside */}
              <div className="fixed inset-0 z-40" onClick={closeRolesPopup}></div>

              <div className="absolute left-16 bottom-0 bg-white border-2 border-gray-200 rounded-xl shadow-lg p-4 min-w-[200px] z-50">
                <h3 className="text-[#8b6f47] font-semibold text-lg mb-3">Roles</h3>
                <div className="space-y-2">
                  <Link href="/the-first-smile" onClick={closeRolesPopup}>
                    <div className="w-full text-left px-4 py-3 text-[#8b6f47] hover:bg-[#bbdce5] rounded-lg transition-colors duration-200 cursor-pointer">
                      The First Smile
                    </div>
                  </Link>
                  <Link href="/smile-builder" onClick={closeRolesPopup}>
                    <div className="w-full text-left px-4 py-3 text-[#8b6f47] hover:bg-[#bbdce5] rounded-lg transition-colors duration-200 cursor-pointer">
                      Smile Builder
                    </div>
                  </Link>
                  <Link href="/ambassador-of-joy" onClick={closeRolesPopup}>
                    <div className="w-full text-left px-4 py-3 text-[#8b6f47] hover:bg-[#bbdce5] rounded-lg transition-colors duration-200 cursor-pointer">
                      Ambassador of joy
                    </div>
                  </Link>
                </div>
              </div>
            </>
          )}
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
        </header>

        {/* Main Content Area */}
        <div className="flex-1 px-8 pb-8">
          <h1 className="text-[#8b6f47] text-2xl font-bold mb-8">My art shelf.</h1>

          <div className="flex gap-8">
            {/* Left Side - Art Grid */}
            <div className="flex-1 space-y-6">
              {/* Top Row - 3 drawings */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                <div className="flex gap-4 justify-center">
                  {/* Turtle Drawing */}
                  <div className="w-32 h-32 bg-white border-2 border-black rounded-lg p-2 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-20 h-16 bg-green-500 rounded-full"></div>
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-400 rounded-full"></div>
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute -left-2 top-4 w-6 h-4 bg-green-400 rounded-full"></div>
                      <div className="absolute -right-2 top-4 w-6 h-4 bg-green-400 rounded-full"></div>
                      <div className="absolute -bottom-2 -left-1 w-6 h-4 bg-green-400 rounded-full"></div>
                      <div className="absolute -bottom-2 -right-1 w-6 h-4 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Children Holding Hands Drawing */}
                  <div className="w-32 h-32 bg-white border-2 border-black rounded-lg p-2 flex items-center justify-center">
                    <div className="flex items-end gap-2">
                      {/* Girl */}
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-pink-200 rounded-full mb-1"></div>
                        <div className="w-2 h-8 bg-pink-400 rounded"></div>
                        <div className="w-8 h-4 bg-pink-400 rounded-b-full"></div>
                        <div className="flex gap-1 mt-1">
                          <div className="w-1 h-4 bg-pink-300"></div>
                          <div className="w-1 h-4 bg-pink-300"></div>
                        </div>
                      </div>
                      {/* Boy */}
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-blue-200 rounded-full mb-1"></div>
                        <div className="w-2 h-8 bg-red-400 rounded"></div>
                        <div className="w-8 h-4 bg-blue-400 rounded-b-full"></div>
                        <div className="flex gap-1 mt-1">
                          <div className="w-1 h-4 bg-blue-300"></div>
                          <div className="w-1 h-4 bg-blue-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Star Drawing */}
                  <div className="w-32 h-32 bg-white border-2 border-black rounded-lg p-2 flex items-center justify-center">
                    <div className="relative">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon
                          points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
                          fill="#fbbf24"
                          stroke="#f59e0b"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Row - 1 drawing */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                <div className="flex justify-center">
                  {/* Car Drawing */}
                  <div className="w-32 h-32 bg-white border-2 border-black rounded-lg p-2 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-16 h-8 bg-red-500 rounded-t-full"></div>
                      <div className="w-20 h-6 bg-red-400 rounded-b-lg"></div>
                      <div className="absolute top-2 left-2 w-4 h-3 bg-blue-400 rounded"></div>
                      <div className="absolute -bottom-2 left-2 w-4 h-4 bg-black rounded-full"></div>
                      <div className="absolute -bottom-2 right-2 w-4 h-4 bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row - Empty Shelf */}
              <div className="bg-white rounded-2xl p-12 border-2 border-gray-200 text-center">
                <p className="text-[#8b6f47] text-lg">Empty shelf - Mind your next smile</p>
              </div>
            </div>

            {/* Right Side - Celebrating Bear */}
            <div className="flex items-center justify-center">
              <img
                src="public/imagenes/oso fiesta galeria.png"
                alt="Celebrating Bear"
                className="w-64 h-auto"
              />
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
  )
}
