"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Star, Users, Edit, Trash2 } from "lucide-react"

const mySkills = [
  {
    id: "1",
    title: "Web Development with React",
    category: "Programming",
    level: "Intermediate",
    price: 50,
    rating: 4.9,
    students: 45,
    status: "active",
  },
  {
    id: "2",
    title: "UI/UX Design Basics",
    category: "Design",
    level: "Beginner",
    price: 40,
    rating: 4.8,
    students: 32,
    status: "active",
  },
  {
    id: "3",
    title: "JavaScript Advanced Concepts",
    category: "Programming",
    level: "Advanced",
    price: 60,
    rating: 4.9,
    students: 28,
    status: "draft",
  },
]

export function MySkills() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">My Skills</h2>
          <p className="text-muted-foreground">Manage the skills you teach</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Skill
        </Button>
      </div>

      <div className="grid gap-4">
        {mySkills.map((skill) => (
          <Card key={skill.id} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-3 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{skill.title}</h3>
                        <Badge variant={skill.status === "active" ? "default" : "secondary"}>{skill.status}</Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="outline">{skill.category}</Badge>
                        <Badge variant="outline">{skill.level}</Badge>
                        <span className="text-sm text-muted-foreground">${skill.price}/session</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{skill.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{skill.students} students</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
