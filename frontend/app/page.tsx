import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeroCarousel } from "@/components/hero-carousel"
import {
  ArrowRight,
  BookOpen,
  Users,
  Zap,
  Shield,
  Star,
  TrendingUp,
  Search,
  Calendar,
  MessageSquare,
  Video,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-[5vw] md:py-[8vw]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl flex flex-col items-center text-center space-y-[3vw]">
            <Badge variant="secondary" className="px-4 py-1.5 animate-fade-in">
              Join 50,000+ learners and teachers
            </Badge>
            <h1 className="font-bold tracking-tight text-balance animate-slide-up animation-delay-200">
              Learn Skills From People Around You
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed text-pretty animate-slide-up animation-delay-400">
              Connect with skilled individuals, request personalized lessons, and grow your expertise. SkillSwap makes
              learning and teaching seamless.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-600">
              <Button size="lg" className="w-full sm:w-auto transition-transform hover:scale-105" asChild>
                <Link href="/signup">
                  Sign Up
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent transition-transform hover:scale-105"
                asChild
              >
                <Link href="/login">Login</Link>
              </Button>
            </div>

            <div className="w-full mt-[4vw] animate-fade-in animation-delay-800">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[4vw] md:py-[5vw]">
          <div className="grid gap-[3vw] md:grid-cols-2 items-center">
            <div className="space-y-[2vw] animate-slide-in-left flex flex-col items-center md:items-start text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-bold tracking-tight text-balance">Find the Perfect Teacher</h2>
              <p className="text-muted-foreground leading-relaxed">
                Browse through hundreds of skilled teachers offering expertise in various fields. Filter by category,
                rating, price, and availability to find your ideal match.
              </p>
              <Button className="transition-transform hover:scale-105" asChild>
                <Link href="/browse">
                  Browse Skills
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative aspect-video rounded-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <Search className="h-24 w-24 text-muted-foreground/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[4vw] md:py-[5vw]">
          <div className="grid gap-[3vw] md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <div className="relative aspect-video rounded-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <Calendar className="h-24 w-24 text-muted-foreground/20" />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-[2vw] animate-slide-in-right flex flex-col items-center md:items-start text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-bold tracking-tight text-balance">Schedule and Confirm Sessions</h2>
              <p className="text-muted-foreground leading-relaxed">
                Add skills to your learning cart and send requests with your preferred times. Teachers review and accept
                based on their availability. Simple and efficient.
              </p>
              <Button className="transition-transform hover:scale-105" asChild>
                <Link href="/cart">
                  View Learning Cart
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[4vw] md:py-[5vw]">
          <div className="grid gap-[3vw] md:grid-cols-2 items-center">
            <div className="space-y-[2vw] animate-slide-in-left flex flex-col items-center md:items-start text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-bold tracking-tight text-balance">Chat and Video Call for Real-Time Learning</h2>
              <p className="text-muted-foreground leading-relaxed">
                Connect with your teacher through our integrated messaging system. Schedule video calls for live
                sessions and get real-time feedback on your progress.
              </p>
              <Button className="transition-transform hover:scale-105" asChild>
                <Link href="/messages">
                  Open Messages
                  <MessageSquare className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative aspect-video rounded-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <Video className="h-24 w-24 text-muted-foreground/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[3vw]">
          <div className="grid grid-cols-2 gap-[3vw] md:grid-cols-4 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Skills Available</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm text-muted-foreground">Lessons Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold">4.9</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-[5vw] md:py-[8vw]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center space-y-4 mb-[4vw]">
            <h2 className="font-bold tracking-tight text-balance">Everything you need to learn and teach</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our platform provides all the tools you need for a seamless learning experience
            </p>
          </div>

          <div className="grid gap-[3vw] md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-border bg-card hover-lift">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Browse Skills</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Explore hundreds of skills from expert teachers. Find exactly what you want to learn.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover-lift">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Request Lessons</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Add skills to your learning cart and send requests to teachers. Get personalized attention.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover-lift">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Live Sessions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Once accepted, start your lesson session. Learn at your own pace with expert guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover-lift">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Secure Platform</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your data is protected with enterprise-grade security. Learn and teach with confidence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover-lift">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Rating System</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rate your experience and help others find the best teachers. Build your reputation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover-lift">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Track Progress</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Monitor your learning journey and see your growth over time. Stay motivated.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[5vw] md:py-[8vw]">
          <div className="mx-auto max-w-2xl text-center space-y-4 mb-[4vw]">
            <h2 className="font-bold tracking-tight text-balance">How it works</h2>
            <p className="text-muted-foreground leading-relaxed">Get started in three simple steps</p>
          </div>

          <div className="grid gap-[4vw] md:grid-cols-3 max-w-5xl mx-auto">
            <div className="relative space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-semibold">Browse & Select</h3>
              <p className="text-muted-foreground leading-relaxed">
                Explore our marketplace and find skills you want to learn. Add them to your learning cart.
              </p>
            </div>

            <div className="relative space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-semibold">Request & Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Send lesson requests to teachers. They'll review and accept based on availability.
              </p>
            </div>

            <div className="relative space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-semibold">Learn & Grow</h3>
              <p className="text-muted-foreground leading-relaxed">
                Start your lesson session and learn from experts. Rate your experience when done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-[5vw] md:py-[8vw]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-[3vw]">
            <h2 className="font-bold tracking-tight text-balance">Ready to start your learning journey?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Join thousands of learners and teachers on SkillSwap. Create your account today and unlock unlimited
              learning opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto transition-transform hover:scale-105" asChild>
                <Link href="/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent transition-transform hover:scale-105"
                asChild
              >
                <Link href="/become-teacher">Become a Teacher</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
