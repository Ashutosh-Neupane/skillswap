"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Calendar, MessageSquare } from "lucide-react"

const completedSessions = [
  {
    id: "1",
    title: "Portrait Photography",
    teacher: "Lisa Anderson",
    teacherImage: "/photographer.png",
    completedDate: "Jan 5, 2025",
    sessionNumber: 12,
    totalSessions: 12,
    rating: 5,
    type: "learning",
    hasReview: true,
  },
  {
    id: "2",
    title: "Digital Marketing Strategy",
    teacher: "Emily Rodriguez",
    teacherImage: "/marketer.png",
    completedDate: "Jan 3, 2025",
    sessionNumber: 10,
    totalSessions: 16,
    rating: null,
    type: "learning",
    hasReview: false,
  },
  {
    id: "3",
    title: "Web Development with React",
    student: "Sarah Johnson",
    studentImage: "/diverse-classroom-teacher.png",
    completedDate: "Jan 2, 2025",
    sessionNumber: 4,
    totalSessions: 12,
    rating: 5,
    type: "teaching",
    hasReview: true,
  },
]

export function CompletedSessions() {
  const handleRateSession = (id: string) => {
    console.log("Rate session:", id)
  }

  return (
    <div className="space-y-4">
      {completedSessions.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <Star className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium">No completed sessions</p>
            <p className="text-sm text-muted-foreground mt-2">Your completed lessons will appear here</p>
          </CardContent>
        </Card>
      ) : (
        completedSessions.map((session) => (
          <Card key={session.id}>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3 flex-1">
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
                        <Badge variant="outline">Completed</Badge>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {session.type === "learning" ? `with ${session.teacher}` : `with ${session.student}`}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{session.completedDate}</span>
                        </div>
                        <div>
                          <span>Session </span>
                          <span className="font-medium">
                            {session.sessionNumber} of {session.totalSessions}
                          </span>
                        </div>
                      </div>

                      {session.hasReview && session.rating && (
                        <div className="flex items-center gap-1">
                          <span className="text-sm text-muted-foreground">Your rating:</span>
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < session.rating! ? "fill-yellow-400 text-yellow-400" : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
                  {!session.hasReview && (
                    <Button onClick={() => handleRateSession(session.id)} className="w-full sm:w-auto">
                      <Star className="mr-2 h-4 w-4" />
                      Rate Session
                    </Button>
                  )}
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
