"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trash2, Star } from "lucide-react"

const cartItems = [
  {
    id: "1",
    title: "Digital Marketing Strategy",
    teacher: "Emily Rodriguez",
    teacherImage: "/marketer.png",
    category: "Marketing",
    level: "Advanced",
    price: 75,
    rating: 4.9,
    sessions: 16,
  },
  {
    id: "2",
    title: "Python for Data Science",
    teacher: "David Kim",
    teacherImage: "/data-scientist.jpg",
    category: "Programming",
    level: "Intermediate",
    price: 60,
    rating: 4.7,
    sessions: 15,
  },
  {
    id: "3",
    title: "Portrait Photography",
    teacher: "Lisa Anderson",
    teacherImage: "/photographer.png",
    category: "Photography",
    level: "Beginner",
    price: 45,
    rating: 4.8,
    sessions: 12,
  },
]

export function CartItems() {
  const handleRemove = (id: string) => {
    console.log("Remove item:", id)
  }

  if (cartItems.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-lg font-medium">Your learning cart is empty</p>
          <p className="text-sm text-muted-foreground mt-2">Browse skills and add them to your cart</p>
          <Button className="mt-6" asChild>
            <Link href="/browse">Browse Skills</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{cartItems.length} items in cart</h2>
        <Button variant="ghost" size="sm">
          Clear All
        </Button>
      </div>

      {cartItems.map((item) => (
        <Card key={item.id} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <Link href={`/skills/${item.id}`} className="shrink-0">
                <div className="relative h-24 w-32 overflow-hidden rounded-md bg-muted">
                  <Image
                    src={`/.jpg?height=96&width=128&query=${item.category}`}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              <div className="flex flex-1 flex-col justify-between">
                <div className="space-y-2">
                  <Link href={`/skills/${item.id}`}>
                    <h3 className="font-semibold hover:text-primary transition-colors">{item.title}</h3>
                  </Link>

                  <div className="flex items-center gap-2">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={item.teacherImage || "/placeholder.svg"} alt={item.teacher} />
                      <AvatarFallback>{item.teacher[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{item.teacher}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{item.category}</Badge>
                    <Badge variant="outline">{item.level}</Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.sessions} sessions</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="text-xl font-bold">${item.price}</div>
                  <Button variant="ghost" size="sm" onClick={() => handleRemove(item.id)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
