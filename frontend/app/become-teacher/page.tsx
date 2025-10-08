import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DollarSign, Calendar, Users, TrendingUp, Shield, Headphones } from "lucide-react"

export const metadata: Metadata = {
  title: "Become a Teacher - SkillShare",
  description: "Start teaching on SkillShare",
}

export default function BecomeTeacherPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-16">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Become a Teacher</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Share your expertise, inspire others, and earn money doing what you love
          </p>
          <Button size="lg" asChild>
            <Link href="/signup">Start Teaching Today</Link>
          </Button>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Why Teach on SkillShare?</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Earn Money</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Set your own rates and earn competitive income. Teachers on SkillShare earn an average of $50-100 per
                  session.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Flexible Schedule</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Teach on your own schedule. Accept lesson requests that fit your availability and lifestyle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Global Reach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connect with students from around the world. Teach online from anywhere with an internet connection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Grow Your Brand</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build your reputation as an expert. Positive reviews and ratings help you attract more students.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Secure Platform</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We handle all payments securely. Get paid promptly after completing sessions with built-in protection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Headphones className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Dedicated Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our support team is here to help. Get assistance with technical issues, payments, or any questions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold">Teacher Requirements</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Expertise in the skill you want to teach</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Reliable internet connection for video sessions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Commitment to providing quality instruction</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Professional and respectful communication</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Ability to create engaging learning experiences</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardContent className="p-8 text-center space-y-6">
            <h2 className="text-2xl font-bold">Ready to start teaching?</h2>
            <p className="text-muted-foreground">Join thousands of teachers on SkillShare and make a difference</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">Create Teacher Account</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
