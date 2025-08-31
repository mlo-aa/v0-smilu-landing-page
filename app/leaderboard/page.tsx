"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Leaderboard() {
  const pathname = usePathname()

  const leaderboardData = [
    { rank: 1, name: "Dennise Alvarado", tokens: 37, crown: "👑", accessory: "🌹" },
    { rank: 2, name: "Tamara Ortega", tokens: 26, crown: "", accessory: "❤️" },
    { rank: 3, name: "Angie Alpizar", tokens: 24, crown: "", accessory: "🎈" },
    { rank: 4, name: "Emilio Alfaro", tokens: 23, crown: "", accessory: "" },
    { rank: 5, name: "Alfredo Fuentes", tokens: 20, crown: "", accessory: "" },
    { rank: 6, name: "Thomas Torres", tokens: 14, crown: "", accessory: "" },
  ]

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

        {/* Star with Podium Icon - Active */}
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200 cursor-pointer ${
            pathname === "/leaderboard" ? "bg-[#bbdce5]" : "bg-gray-200 hover:bg-[#bbdce5]"
          }`}
        >
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
        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-[#bbdce5] transition-colors duration-200 cursor-pointer">
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
          <Link href="/" className="block">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agregar%20un%20subt%C3%ADtulo%20%282%29-75jPo6UeWy3HJc1BvNOXe3xsZkNOUZ.png"
              alt="Smilu"
              className="h-16 w-auto"
            />
          </Link>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center px-8 py-8">
          {/* Title */}
          <h1 className="text-[#8b6f47] text-4xl font-bold mb-12 font-sweet-apricot">Top Smilers</h1>

          {/* Podium Section */}
          <div className="flex items-end justify-center gap-8 mb-16">
            {/* Second Place */}
            <div className="flex flex-col items-center">
              <div className="text-[#bbdce5] text-lg font-bold mb-2">#2</div>
              <div className="bg-[#bbdce5] border-4 border-white rounded-2xl p-6 flex flex-col items-center shadow-lg">
                <div className="w-20 h-20 mb-4 relative">
                  <div className="w-full h-full bg-[#8b6f47] rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#a0522d] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-black rounded-full absolute top-6 left-6"></div>
                      <div className="w-3 h-3 bg-black rounded-full absolute top-6 right-6"></div>
                      <div className="w-2 h-1 bg-black rounded-full absolute top-10 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">❤️</div>
                </div>
                <div className="text-[#8b6f47] font-semibold text-center">Tamara Ortega</div>
              </div>
            </div>

            {/* First Place */}
            <div className="flex flex-col items-center">
              <div className="text-[#f4d03f] text-lg font-bold mb-2">#1</div>
              <div className="bg-[#f4d03f] border-4 border-white rounded-2xl p-6 flex flex-col items-center shadow-lg transform scale-110">
                <div className="w-20 h-20 mb-4 relative">
                  <div className="w-full h-full bg-[#8b6f47] rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#a0522d] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-black rounded-full absolute top-6 left-6"></div>
                      <div className="w-3 h-3 bg-black rounded-full absolute top-6 right-6"></div>
                      <div className="w-2 h-1 bg-black rounded-full absolute top-10 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  </div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-3xl">👑</div>
                  <div className="absolute -top-2 -right-2 text-2xl">🌹</div>
                </div>
                <div className="text-[#8b6f47] font-semibold text-center">Dennise Alvarado</div>
              </div>
            </div>

            {/* Third Place */}
            <div className="flex flex-col items-center">
              <div className="text-[#b8e6b8] text-lg font-bold mb-2">#3</div>
              <div className="bg-[#b8e6b8] border-4 border-white rounded-2xl p-6 flex flex-col items-center shadow-lg">
                <div className="w-20 h-20 mb-4 relative">
                  <div className="w-full h-full bg-[#8b6f47] rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#a0522d] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-black rounded-full absolute top-6 left-6"></div>
                      <div className="w-3 h-3 bg-black rounded-full absolute top-6 right-6"></div>
                      <div className="w-2 h-1 bg-black rounded-full absolute top-10 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">🎈</div>
                </div>
                <div className="text-[#8b6f47] font-semibold text-center">Angie Alpizar</div>
              </div>
            </div>
          </div>

          {/* Leaderboard List */}
          <div className="w-full max-w-4xl grid grid-cols-2 gap-4">
            {leaderboardData.map((user, index) => (
              <div
                key={user.rank}
                className="bg-white border-2 border-[#f4d03f] rounded-2xl p-4 flex items-center gap-4"
              >
                <div className="w-8 h-8 bg-[#f4d03f] rounded-full flex items-center justify-center text-[#8b6f47] font-bold text-sm">
                  {user.rank}.
                </div>
                <div className="flex-1">
                  <div className="text-[#8b6f47] font-semibold">{user.name}</div>
                  <div className="text-gray-500 text-sm">{user.tokens} tokens</div>
                </div>
              </div>
            ))}
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
