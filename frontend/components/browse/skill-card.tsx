"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Users, ShoppingCart } from "lucide-react"

interface SkillCardProps {
  skill: {
    id: string
    title: string
    teacher: string
    teacherImage: string
    category: string
    level: string
    price: number
    rating: number
    reviews: number
    students: number
    description: string
  }
}

export function SkillCard({ skill }: SkillCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    // Add to cart logic
    console.log("Added to cart:", skill.id)
  }

  return (
    <Link href={`/skills/${skill.id}`}>
      <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={`/.jpg?height=200&width=400&query=${skill.category}`}
            alt={skill.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <Badge className="absolute right-3 top-3">{skill.category}</Badge>
        </div>

        <CardContent className="p-4 space-y-3">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={skill.teacherImage || "/placeholder.svg"} alt={skill.teacher} />
              <AvatarFallback>{skill.teacher[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">{skill.teacher}</span>
          </div>

          <h3 className="font-semibold leading-tight line-clamp-2">{skill.title}</h3>

          <p className="text-sm text-muted-foreground line-clamp-2">{skill.description}</p>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{skill.rating}</span>
              <span className="text-muted-foreground">({skill.reviews})</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{skill.students.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="outline">{skill.level}</Badge>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <div className="text-2xl font-bold">${skill.price}</div>
          <Button size="sm" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
