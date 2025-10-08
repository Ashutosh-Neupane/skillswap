import type { Metadata } from "next"
import Link from "next/link"
import { SignupForm } from "@/components/auth/signup-form"
import { GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "Sign Up - SkillShare",
  description: "Create your SkillShare account",
}

export default function SignupPage() {
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
              <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
              <p className="text-muted-foreground">Join thousands of learners and teachers</p>
            </div>
          </div>

          <SignupForm />

          <div className="text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link href="/login" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
