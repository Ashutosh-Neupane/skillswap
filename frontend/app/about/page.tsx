import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Target, Heart, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - SkillShare",
  description: "Learn more about SkillShare",
}

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-16">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About SkillShare</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Connecting learners and teachers to create a world where knowledge flows freely
          </p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              SkillShare was founded in 2024 with a simple mission: make learning accessible to everyone. We believe
              that everyone has valuable skills to share, and everyone has something new to learn. Our platform bridges
              the gap between those who want to teach and those who want to learn.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What started as a small project has grown into a thriving community of over 50,000 learners and teachers
              from around the world. Every day, thousands of lessons are conducted on our platform, covering everything
              from programming and design to music and languages.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize education by creating a platform where anyone can learn from experts and share their own
                expertise with others.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in accessibility, quality education, community support, and continuous learning. Every
                decision we make is guided by these core values.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Our Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 50,000 active users and 500+ skills available, our community is diverse, supportive, and
                always growing. Join us today!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Our Technology</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built with modern technology to provide a seamless, secure, and efficient learning experience for both
                teachers and students.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/50">
          <CardContent className="p-8 text-center space-y-6">
            <h2 className="text-2xl font-bold">Ready to start your journey?</h2>
            <p className="text-muted-foreground">Join thousands of learners and teachers on SkillShare today</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/browse">Browse Skills</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
