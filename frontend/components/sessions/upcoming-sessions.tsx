"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Video, MessageSquare } from "lucide-react"

const upcomingSessions = [
  {
    id: "1",
    title: "Digital Marketing Strategy",
    teacher: "Emily Rodriguez",
    teacherImage: "/marketer.png",
    date: "Tomorrow",
    time: "2:00 PM - 3:30 PM",
    duration: "1.5 hours",
    sessionNumber: 11,
    totalSessions: 16,
    meetingLink: "https://meet.example.com/abc123",
    type: "learning",
  },
  {
    id: "2",
    title: "Python for Data Science",
    teacher: "David Kim",
    teacherImage: "/data-scientist.jpg",
    date: "Friday, Jan 12",
    time: "10:00 AM - 11:30 AM",
    duration: "1.5 hours",
    sessionNumber: 7,
    totalSessions: 15,
    meetingLink: "https://meet.example.com/xyz789",
    type: "learning",
  },
  {
    id: "3",
    title: "Web Development with React",
    student: "John Smith",
    studentImage: "/placeholder.svg",
    date: "Saturday, Jan 13",
    time: "3:00 PM - 4:00 PM",
    duration: "1 hour",
    sessionNumber: 5,
    totalSessions: 12,
    meetingLink: "https://meet.example.com/def456",
    type: "teaching",
  },
]

export function UpcomingSessions() {
  return (
    <div className="space-y-4">
      {upcomingSessions.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium">No upcoming sessions</p>
            <p className="text-sm text-muted-foreground mt-2">Your scheduled lessons will appear here</p>
          </CardContent>
        </Card>
      ) : (
        upcomingSessions.map((session) => (
          <Card key={session.id} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={
                          session.type === "learning"
                            ? session.teacherImage || "/placeholder.svg"
                            : session.studentImage || "/placeholder.svg"
                        }
                        alt={session.type === "learning" ? session.teacher : session.student}
                      />
                      <AvatarFallback>
                        {session.type === "learning" ? session.teacher?.[0] : session.student?.[0]}
                      </AvatarFallback>
                    </Avatar>

                    <div className="space-y-2 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold">{session.title}</h3>
                        <Badge variant={session.type === "learning" ? "default" : "secondary"}>
                          {session.type === "learning" ? "Learning" : "Teaching"}
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {session.type === "learning" ? `with ${session.teacher}` : `with ${session.student}`}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{session.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{session.time}</span>
                        </div>
                      </div>

                      <div className="text-sm">
                        <span className="text-muted-foreground">Session </span>
                        <span className="font-medium">
                          {session.sessionNumber} of {session.totalSessions}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
                  <Button className="w-full sm:w-auto">
                    <Video className="mr-2 h-4 w-4" />
                    Join Session
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
