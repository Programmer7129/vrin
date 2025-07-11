"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">Vrin</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/product"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Product
            </Link>
            <Link
              href="/solutions"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="gradient-bg text-white hover:opacity-90">
                Get Started
              </Button>
            </Link>
            <ModeToggle />
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="/product"
              className="text-sm font-medium py-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/solutions"
              className="text-sm font-medium py-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium py-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium py-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Docs
            </Link>
            <div className="flex items-center gap-4 pt-2">
              <Link href="/login" className="flex-1">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Log in
                </Button>
              </Link>
              <Link href="/signup" className="flex-1">
                <Button size="sm" className="w-full gradient-bg text-white hover:opacity-90">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="flex justify-end pt-2">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
