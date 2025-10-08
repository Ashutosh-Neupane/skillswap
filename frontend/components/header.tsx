"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { GraduationCap, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"

export function Header() {
  const pathname = usePathname()
  const cartCount = 3 // This would come from state/context

  const isActive = (path: string) => pathname === path

  const isDashboardPage =
    pathname?.startsWith("/dashboard") ||
    pathname?.startsWith("/cart") ||
    pathname?.startsWith("/sessions") ||
    pathname?.startsWith("/messages") ||
    pathname?.startsWith("/profile")

  if (isDashboardPage) return null

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">SkillShare</span>
          </Link>

          {/* Centered Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
            <Link
              href="/browse"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/browse") ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Browse Skills
            </Link>
            <Link
              href="/how-it-works"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/how-it-works") ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              How It Works
            </Link>
            <Link
              href="/become-teacher"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/become-teacher") ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Become a Teacher
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <ThemeToggle />

            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative h-9 w-9">
                <ShoppingCart className="h-4 w-4" />
                {cartCount > 0 && (
                  <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            <Link href="/profile">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <User className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/login">
              <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent">
                Sign In
              </Button>
            </Link>

            <Link href="/signup">
              <Button size="sm" className="hidden sm:flex">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
