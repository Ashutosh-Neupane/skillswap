"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, CheckCircle2, X } from "lucide-react"

const pendingRequests = [
  {
    id: "1",
    title: "Spanish Conversation Practice",
    requester: "Maria Garcia",
    requesterImage: "/language-teacher.jpg",
    message: "I'd love to learn Spanish conversation. I'm available on weekday evenings.",
    availability: "Weekday evenings",
    requestedDate: "2 hours ago",
    price: 40,
    sessions: 12,
    type: "incoming",
  },
  {
    id: "2",
    title: "Guitar for Beginners",
    teacher: "Carlos Martinez",
    teacherImage: "/diverse-musician-ensemble.png",
    message: "Looking forward to learning guitar basics. Available on weekends.",
    availability: "Weekend mornings",
    requestedDate: "1 day ago",
    price: 35,
    sessions: 10,
    type: "outgoing",
    status: "pending",
  },
  {
    id: "3",
    title: "Creative Writing Workshop",
    requester: "John Doe",
    requesterImage: "/placeholder.svg",
    message: "Interested in improving my creative writing skills for my novel project.",
    availability: "Flexible",
    requestedDate: "3 hours ago",
    price: 55,
    sessions: 8,
    type: "incoming",
  },
]

export function PendingRequests() {
  const handleAccept = (id: string) => {
    console.log("Accept request:", id)
  }

  const handleDecline = (id: string) => {
    console.log("Decline request:", id)
  }

  const handleCancel = (id: string) => {
    console.log("Cancel request:", id)
  }

  return (
    <div className="space-y-4">
      {pendingRequests.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <Clock className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium">No pending requests</p>
            <p className="text-sm text-muted-foreground mt-2">Lesson requests will appear here</p>
          </CardContent>
        </Card>
      ) : (
        pendingRequests.map((request) => (
          <Card key={request.id}>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={
                          request.type === "incoming"
                            ? request.requesterImage || "/placeholder.svg"
                            : request.teacherImage || "/placeholder.svg"
                        }
                        alt={request.type === "incoming" ? request.requester : request.teacher}
                      />
                      <AvatarFallback>
                        {request.type === "incoming" ? request.requester?.[0] : request.teacher?.[0]}
                      </AvatarFallback>
                    </Avatar>

                    <div className="space-y-2 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold">{request.title}</h3>
                        <Badge variant={request.type === "incoming" ? "default" : "secondary"}>
                          {request.type === "incoming" ? "Request Received" : "Request Sent"}
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {request.type === "incoming" ? `from ${request.requester}` : `to ${request.teacher}`}
                      </p>

                      <div className="text-sm">
                        <p className="text-muted-foreground mb-1">Message:</p>
                        <p className="italic">"{request.message}"</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Availability: </span>
                          <span className="font-medium">{request.availability}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Sessions: </span>
                          <span className="font-medium">{request.sessions}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Price: </span>
                          <span className="font-medium">${request.price}/session</span>
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground">Requested {request.requestedDate}</p>
                    </div>
                  </div>
                </div>

                {request.type === "incoming" ? (
                  <div className="flex gap-2">
                    <Button onClick={() => handleAccept(request.id)} className="flex-1">
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Accept Request
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleDecline(request.id)}
                      className="flex-1 bg-transparent"
                    >
                      <X className="mr-2 h-4 w-4" />
                      Decline
                    </Button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => handleCancel(request.id)} className="bg-transparent">
                      Cancel Request
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
