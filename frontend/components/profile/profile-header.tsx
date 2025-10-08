"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Award, Edit } from "lucide-react"

export function ProfileHeader() {
  const user = {
    name: "Alex Thompson",
    email: "alex.thompson@example.com",
    avatar: "/placeholder.svg",
    bio: "Passionate learner and teacher. Love sharing knowledge about web development and design.",
    rating: 4.9,
    students: 450,
    skillsTaught: 5,
    skillsLearning: 3,
    joinedDate: "January 2024",
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback className="text-2xl">{user.name[0]}</AvatarFallback>
            </Avatar>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <Badge variant="secondary">Teacher</Badge>
                </div>
                <p className="text-muted-foreground">{user.email}</p>
                <p className="text-sm">{user.bio}</p>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{user.rating}</span>
                  <span className="text-muted-foreground">rating</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{user.students} students</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Award className="h-4 w-4" />
                  <span>{user.skillsTaught} skills taught</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">Member since {user.joinedDate}</p>
            </div>
          </div>

          <Button>
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
