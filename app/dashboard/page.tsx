"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function Dashboard() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [activeCoupon, setActiveCoupon] = useState<string | null>(null)

  const modalContent = {
    "Child History":
      "The lack of toys in childhood has profound consequences on children's social, emotional, and cognitive development. Studies show that the deprivation of play is associated with higher levels of anxiety, depression, isolation, and even aggressive behaviors in adulthood. Likewise, when children do not have opportunities for free and creative play, they are limited in developing essential skills such as problem-solving, emotional regulation, and the ability to relate to others.\n\nThis is where Smilu makes a difference: each ToyToken becomes a real toy delivered into the hands of a child, ensuring not only moments of joy but also opportunities for learning and growth. In addition, thanks to the NFTs drawn by the children themselves, every contribution is linked to an authentic story, creating an emotional bond between the giver and the receiver. All of this is supported by the transparency of blockchain, guaranteeing that the impact is visible, auditable, and trustworthy.",
    Perks: null, // Will be rendered as cards
    Community:
      "At Smilu, community goes beyond social change makers. It is an ecosystem where supporters, ambassadors, and institutions committed to childhood come together. Local associations, schools, foundations, and organizations working with vulnerable children find in Smilu a transparent space to channel support and showcase their impact.\n\nBy joining, you don't just become part of a global network of caring people—you also collaborate with entities that directly understand children's needs and ensure that every toy and every smile reaches the right place. In this way, the Smilu community doesn't just fund; it supports, amplifies, and strengthens social impact.",
  }

  const perksData = [
    {
      discount: "15% off",
      category: "Libraries",
      description: "With NFT+Token+Certificate",
    },
    {
      discount: "10% off",
      category: "Restaurants",
      description: "With NFT+Token+Certificate",
    },
  ]

  const openModal = (modalType: string) => {
    setActiveModal(modalType)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  const openCoupon = (couponType: string) => {
    setActiveCoupon(couponType)
  }

  const closeCoupon = () => {
    setActiveCoupon(null)
  }

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
      <div
        className={`flex-1 flex flex-col ${activeModal || activeCoupon ? "blur-sm" : ""} transition-all duration-300`}
      >
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

          {/* Why Smilu Section */}
          <div className="w-full max-w-4xl mt-16">
            <h2 className="text-[#8b6f47] text-2xl font-bold text-center mb-8">Why Smilu</h2>
            <div className="flex items-center justify-center space-x-8">
              {/* Child History Button */}
              <button
                onClick={() => openModal("Child History")}
                className="bg-white border-2 border-gray-300 rounded-3xl px-8 py-6 flex flex-col items-center space-y-3 hover:border-[#a8d5d8] transition-colors duration-200 min-w-[200px]"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#8b6f47" strokeWidth="2" fill="none" />
                    <circle cx="9" cy="9" r="1" fill="#8b6f47" />
                    <circle cx="15" cy="9" r="1" fill="#8b6f47" />
                    <path d="M8 15s1.5 2 4 2 4-2 4-2" stroke="#8b6f47" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <span className="text-[#8b6f47] font-medium">Child History</span>
              </button>

              {/* Perks Button */}
              <button
                onClick={() => openModal("Perks")}
                className="bg-white border-2 border-gray-300 rounded-3xl px-8 py-6 flex flex-col items-center space-y-3 hover:border-[#a8d5d8] transition-colors duration-200 min-w-[200px]"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="12" rx="2" stroke="#8b6f47" strokeWidth="2" fill="none" />
                    <rect x="4" y="8" width="4" height="4" fill="#8b6f47" />
                    <rect x="10" y="8" width="4" height="4" fill="#8b6f47" />
                    <rect x="16" y="8" width="4" height="4" fill="#8b6f47" />
                  </svg>
                </div>
                <span className="text-[#8b6f47] font-medium">Perks</span>
              </button>

              {/* Community Button */}
              <button
                onClick={() => openModal("Community")}
                className="bg-white border-2 border-gray-300 rounded-3xl px-8 py-6 flex flex-col items-center space-y-3 hover:border-[#a8d5d8] transition-colors duration-200 min-w-[200px]"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="7" r="4" stroke="#8b6f47" strokeWidth="2" fill="none" />
                    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="#8b6f47" strokeWidth="2" />
                    <circle cx="16" cy="11" r="3" stroke="#8b6f47" strokeWidth="2" fill="none" />
                    <path d="M21 21v-2a4 4 0 0 0-3-3.87" stroke="#8b6f47" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-[#8b6f47] font-medium">Community</span>
              </button>
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

      {/* Modal Overlay and Popup */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-transparent backdrop-blur-sm" onClick={closeModal}></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border-2 border-gray-200">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="#8b6f47" strokeWidth="2" />
              </svg>
            </button>

            {/* Modal Header */}
            <h3 className="text-[#8b6f47] text-2xl font-bold mb-6">{activeModal}</h3>

            {/* Modal Body */}
            {activeModal === "Perks" ? (
              <div className="space-y-4">
                {perksData.map((perk, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-300 rounded-2xl p-4 flex items-center justify-between hover:border-[#a8d5d8] transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <div className="text-[#8b6f47] font-semibold text-lg">
                        {perk.discount} • {perk.category}
                      </div>
                      <div className="text-gray-500 text-sm mt-1">{perk.description}</div>
                    </div>
                    <button
                      onClick={() => openCoupon(perk.category)}
                      className="bg-gray-100 hover:bg-gray-200 text-[#8b6f47] px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors duration-200"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                      View
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-[#8b6f47] leading-relaxed whitespace-pre-line">
                {modalContent[activeModal as keyof typeof modalContent]}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Coupon Modal */}
      {activeCoupon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-transparent backdrop-blur-sm" onClick={closeCoupon}></div>

          {/* Coupon Content */}
          <div className="relative bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl border-2 border-gray-200">
            {/* Close Button */}
            <button
              onClick={closeCoupon}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="#8b6f47" strokeWidth="2" />
              </svg>
            </button>

            {/* Coupon Design */}
            {activeCoupon === "Libraries" ? (
              <div className="bg-gradient-to-r from-[#8b6f47] to-[#6b5537] text-white rounded-xl p-6 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 text-6xl">📚</div>
                  <div className="absolute bottom-4 right-4 text-4xl">📖</div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-5">
                    📚
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-sm font-medium opacity-90">Reader's Day</h3>
                      <h4 className="text-xs opacity-75">Keep celebrating!</h4>
                    </div>
                    <div className="bg-white text-[#8b6f47] px-2 py-1 rounded text-xs font-bold">SMILU</div>
                  </div>

                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold mb-2">-15%</div>
                    <div className="text-lg font-semibold">ALL BOOKS</div>
                    <div className="text-xs opacity-75">Excludes special editions</div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="text-xs">
                      <div>Valid until:</div>
                      <div className="font-semibold">Dec 31, 2025</div>
                    </div>
                    {/* Fake QR Code */}
                    <div className="w-16 h-16 bg-white rounded grid grid-cols-8 gap-px p-1">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className={`${Math.random() > 0.5 ? "bg-black" : "bg-white"} rounded-sm`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-[#8b6f47] to-[#a0522d] text-white rounded-xl p-6 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 text-6xl">🍽️</div>
                  <div className="absolute bottom-4 right-4 text-4xl">🍔</div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-5">
                    🍽️
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-sm font-medium opacity-90">THE GIFTS</h3>
                      <h4 className="text-lg font-bold">Voucher</h4>
                    </div>
                    <div className="bg-white text-[#8b6f47] px-2 py-1 rounded text-xs font-bold">SMILU</div>
                  </div>

                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold mb-2">10%</div>
                    <div className="text-lg font-semibold">SALE OFF</div>
                    <div className="text-xs opacity-75">On all menu items</div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="text-xs">
                      <div>Valid until:</div>
                      <div className="font-semibold">Dec 31, 2025</div>
                    </div>
                    {/* Fake QR Code */}
                    <div className="w-16 h-16 bg-white rounded grid grid-cols-8 gap-px p-1">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className={`${Math.random() > 0.5 ? "bg-black" : "bg-white"} rounded-sm`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
