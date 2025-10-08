import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Star, Users, Clock, Award, ShoppingCart, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Skill Details - SkillShare",
  description: "Learn more about this skill",
}

export default function SkillDetailPage({ params }: { params: { id: string } }) {
  // Mock data - would come from API/database
  const skill = {
    id: params.id,
    title: "Web Development with React",
    teacher: "Sarah Johnson",
    teacherImage: "/diverse-classroom-teacher.png",
    teacherBio: "Full-stack developer with 10+ years of experience. Passionate about teaching and helping others grow.",
    category: "Programming",
    level: "Intermediate",
    price: 50,
    rating: 4.9,
    reviews: 234,
    students: 1250,
    duration: "8 weeks",
    sessions: 16,
    description:
      "Master modern web development with React, Next.js, and TypeScript. This comprehensive course covers everything from basics to advanced concepts, including state management, routing, API integration, and deployment.",
    whatYouLearn: [
      "Build modern web applications with React and Next.js",
      "Master TypeScript for type-safe development",
      "Implement state management with Context and Redux",
      "Create responsive and accessible user interfaces",
      "Integrate with REST APIs and GraphQL",
      "Deploy applications to production",
    ],
    requirements: [
      "Basic understanding of HTML, CSS, and JavaScript",
      "A computer with internet connection",
      "Willingness to learn and practice",
    ],
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>{skill.category}</Badge>
              <Badge variant="outline">{skill.level}</Badge>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{skill.title}</h1>

            <p className="text-lg text-muted-foreground">{skill.description}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{skill.rating}</span>
                <span className="text-muted-foreground">({skill.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{skill.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{skill.duration}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Award className="h-4 w-4" />
                <span>{skill.sessions} sessions</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
            <Image
              src={`/.jpg?height=400&width=800&query=${skill.category}`}
              alt={skill.title}
              fill
              className="object-cover"
            />
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">What you'll learn</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {skill.whatYouLearn.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                {skill.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">About the teacher</h2>
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={skill.teacherImage || "/placeholder.svg"} alt={skill.teacher} />
                  <AvatarFallback>{skill.teacher[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <h3 className="font-semibold">{skill.teacher}</h3>
                  <p className="text-sm text-muted-foreground">{skill.teacherBio}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{skill.rating} rating</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{skill.students.toLocaleString()} students</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:sticky lg:top-20 lg:self-start">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold">${skill.price}</div>
                <p className="text-sm text-muted-foreground">per session</p>
              </div>

              <Separator />

              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Learning Cart
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="lg">
                  Request Lesson Now
                </Button>
              </div>

              <Separator />

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">{skill.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Sessions</span>
                  <span className="font-medium">{skill.sessions}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Level</span>
                  <span className="font-medium">{skill.level}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Students</span>
                  <span className="font-medium">{skill.students.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
