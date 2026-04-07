"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrolled(currentScrollY > 50)

      // 스크롤 방향 감지
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 아래로 스크롤 - 숨기기
        setIsVisible(false)
      } else {
        // 위로 스크롤 - 보이기
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navItems = [
    { href: "/", label: "홈", order: 1 },
    { href: "/about", label: "센터소개", order: 2 },
    { href: "/services", label: "상담안내", order: 3 },
    { href: "/qualification", label: "자격과정", order: 4 },
    { href: "/board", label: "공지사항", order: 5 },
    { href: "/#contact", label: "문의", order: 6 },
  ].sort((a, b) => a.order - b.order)

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b bg-white/50 backdrop-blur-md border-white/40 shadow-sm ${isVisible ? "translate-y-0" : "-translate-y-full"
          } `}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className={`py-2 text-xl font-semibold transition-colors ${isScrolled ? "text-slate-900" : "text-slate-900"
              }`}
          >
            <Image src="/logo.png" alt="빛나는 별" width={60} height={60} />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-10 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-md font-medium transition-colors hover:text-slate-900 ${pathname === item.href ? "text-slate-900 font-semibold" : "text-gray-700"
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-900"
            aria-label="메뉴"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/30 backdrop-blur-md border-t border-white/40">
            <ul className="max-w-6xl mx-auto px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left text-sm font-medium py-2 ${pathname === item.href ? "text-slate-900 font-semibold" : "text-gray-700"
                      } hover:text-slate-900`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  )
}
