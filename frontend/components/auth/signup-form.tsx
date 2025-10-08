"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, X } from "lucide-react"
import Link from "next/link"

const availableSkills = [
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Graphic Design",
  "Digital Marketing",
  "Content Writing",
  "Photography",
  "Video Editing",
  "Music Production",
  "Language Teaching",
  "Cooking",
  "Fitness Training",
  "Yoga",
  "Public Speaking",
  "Business Strategy",
]

export function SignupForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    skillsToTeach: [] as string[],
    skillsToLearn: [] as string[],
    role: [] as string[], // Can be "teacher", "learner", or both
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push("/browse")
    }, 1500)
  }

  const toggleSkillToTeach = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skillsToTeach: prev.skillsToTeach.includes(skill)
        ? prev.skillsToTeach.filter((s) => s !== skill)
        : [...prev.skillsToTeach, skill],
    }))
  }

  const toggleSkillToLearn = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skillsToLearn: prev.skillsToLearn.includes(skill)
        ? prev.skillsToLearn.filter((s) => s !== skill)
        : [...prev.skillsToLearn, skill],
    }))
  }

  const toggleRole = (role: string) => {
    setFormData((prev) => ({
      ...prev,
      role: prev.role.includes(role) ? prev.role.filter((r) => r !== role) : [...prev.role, role],
    }))
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-3">
        <Button variant="outline" className="w-full bg-transparent">
          <Github className="mr-2 h-4 w-4" />
          Continue with GitHub
        </Button>
        <Button variant="outline" className="w-full bg-transparent">
          <Mail className="mr-2 h-4 w-4" />
          Continue with Google
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Create a strong password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label>I want to (select one or both)</Label>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={formData.role.includes("teacher") ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 transition-colors"
              onClick={() => toggleRole("teacher")}
            >
              Teach Skills
            </Badge>
            <Badge
              variant={formData.role.includes("learner") ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 transition-colors"
              onClick={() => toggleRole("learner")}
            >
              Learn Skills
            </Badge>
          </div>
        </div>

        {formData.role.includes("teacher") && (
          <div className="space-y-2">
            <Label>Skills I Can Teach (select multiple)</Label>
            <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2 border border-border rounded-md">
              {availableSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant={formData.skillsToTeach.includes(skill) ? "default" : "outline"}
                  className="cursor-pointer transition-colors"
                  onClick={() => toggleSkillToTeach(skill)}
                >
                  {skill}
                  {formData.skillsToTeach.includes(skill) && <X className="ml-1 h-3 w-3" />}
                </Badge>
              ))}
            </div>
            {formData.skillsToTeach.length > 0 && (
              <p className="text-xs text-muted-foreground">Selected: {formData.skillsToTeach.length} skills</p>
            )}
          </div>
        )}

        {formData.role.includes("learner") && (
          <div className="space-y-2">
            <Label>Skills I Want to Learn (select multiple)</Label>
            <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2 border border-border rounded-md">
              {availableSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant={formData.skillsToLearn.includes(skill) ? "default" : "outline"}
                  className="cursor-pointer transition-colors"
                  onClick={() => toggleSkillToLearn(skill)}
                >
                  {skill}
                  {formData.skillsToLearn.includes(skill) && <X className="ml-1 h-3 w-3" />}
                </Badge>
              ))}
            </div>
            {formData.skillsToLearn.length > 0 && (
              <p className="text-xs text-muted-foreground">Selected: {formData.skillsToLearn.length} skills</p>
            )}
          </div>
        )}

        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
            required
          />
          <Label
            htmlFor="terms"
            className="text-sm font-normal leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </Label>
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </div>
  )
}
