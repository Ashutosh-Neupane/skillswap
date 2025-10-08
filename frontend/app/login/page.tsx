import type { Metadata } from "next"
import Link from "next/link"
import { LoginForm } from "@/components/auth/login-form"
import { GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "Sign In - SkillShare",
  description: "Sign in to your SkillShare account",
}

export default function LoginPage() {
  return (
    <div className="w-full flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
            </Link>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
              <p className="text-muted-foreground">Sign in to your account to continue learning</p>
            </div>
          </div>

          <LoginForm />

          <div className="text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link href="/signup" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
