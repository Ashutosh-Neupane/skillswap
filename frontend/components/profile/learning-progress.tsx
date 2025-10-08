"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "lucide-react"

const learningSkills = [
  {
    id: "1",
    title: "Digital Marketing Strategy",
    teacher: "Emily Rodriguez",
    teacherImage: "/marketer.png",
    category: "Marketing",
    progress: 65,
    sessionsCompleted: 10,
    totalSessions: 16,
    nextSession: "Tomorrow, 2:00 PM",
    status: "in-progress",
  },
  {
    id: "2",
    title: "Python for Data Science",
    teacher: "David Kim",
    teacherImage: "/data-scientist.jpg",
    category: "Programming",
    progress: 40,
    sessionsCompleted: 6,
    totalSessions: 15,
    nextSession: "Friday, 10:00 AM",
    status: "in-progress",
  },
  {
    id: "3",
    title: "Portrait Photography",
    teacher: "Lisa Anderson",
    teacherImage: "/photographer.png",
    category: "Photography",
    progress: 100,
    sessionsCompleted: 12,
    totalSessions: 12,
    nextSession: null,
    status: "completed",
  },
]

export function LearningProgress() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">My Learning</h2>
        <p className="text-muted-foreground">Track your learning progress</p>
      </div>

      <div className="grid gap-4">
        {learningSkills.map((skill) => (
          <Card key={skill.id}>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{skill.title}</h3>
                      <Badge variant={skill.status === "completed" ? "default" : "secondary"}>
                        {skill.status === "completed" ? "Completed" : "In Progress"}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={skill.teacherImage || "/placeholder.svg"} alt={skill.teacher} />
                        <AvatarFallback>{skill.teacher[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">{skill.teacher}</span>
                      <Badge variant="outline" className="ml-2">
                        {skill.category}
                      </Badge>
                    </div>
                  </div>

                  {skill.status === "in-progress" && <Button size="sm">Continue Learning</Button>}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {skill.sessionsCompleted} of {skill.totalSessions} sessions completed
                    </span>
                    <span className="font-medium">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} />
                </div>

                {skill.nextSession && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Next session: {skill.nextSession}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
