import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold gradient-text">Vrin</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              AI-powered memory orchestration platform for healthcare LLMs.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter size={18} />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github size={18} />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/features"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Subscribe</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Stay updated with our latest news and product updates.
              </p>
              <form className="mt-4 flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-[180px]" />
                <Button type="submit" size="sm" className="gradient-bg text-white hover:opacity-90">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Vrin. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
