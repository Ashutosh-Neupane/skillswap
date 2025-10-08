import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, ShoppingCart, Send, Video, Star, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "How It Works - SkillShare",
  description: "Learn how to use SkillShare",
}

export default function HowItWorksPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-16">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">How SkillShare Works</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Start learning or teaching in just a few simple steps
          </p>
        </div>

        <div className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">For Learners</h2>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    1
                  </div>
                  <Search className="mx-auto h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Browse Skills</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Explore our marketplace of skills. Filter by category, level, price, and rating to find the perfect
                    match for your learning goals.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    2
                  </div>
                  <ShoppingCart className="mx-auto h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Add to Cart</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Add skills you want to learn to your learning cart. Review details, pricing, and teacher profiles
                    before proceeding.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    3
                  </div>
                  <Send className="mx-auto h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Send Requests</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Send lesson requests to teachers with your availability and learning goals. Include a personal
                    message to introduce yourself.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    4
                  </div>
                  <Video className="mx-auto h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Start Learning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Once your request is accepted, schedule your first session. Join video calls and learn from expert
                    teachers at your own pace.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    5
                  </div>
                  <Star className="mx-auto h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Rate & Review</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    After completing sessions, rate your experience and leave a review. Help other learners find great
                    teachers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    6
                  </div>
                  <Award className="mx-auto h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Track Progress</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Monitor your learning journey through your profile. See completed sessions, ongoing courses, and
                    achievements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">For Teachers</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    1
                  </div>
                  <h3 className="text-xl font-semibold">Create Your Profile</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sign up and create a compelling profile. Highlight your expertise, experience, and teaching style to
                    attract students.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    2
                  </div>
                  <h3 className="text-xl font-semibold">Add Your Skills</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    List the skills you want to teach. Set your pricing, describe what students will learn, and specify
                    your availability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    3
                  </div>
                  <h3 className="text-xl font-semibold">Accept Requests</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Review lesson requests from interested students. Accept requests that fit your schedule and teaching
                    preferences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    4
                  </div>
                  <h3 className="text-xl font-semibold">Teach & Earn</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Conduct engaging lessons through video calls. Share your knowledge, help students grow, and earn
                    money doing what you love.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Card className="bg-muted/50">
          <CardContent className="p-8 text-center space-y-6">
            <h2 className="text-2xl font-bold">Ready to get started?</h2>
            <p className="text-muted-foreground">Join SkillShare today and start your learning or teaching journey</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">Sign Up Now</Link>
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
