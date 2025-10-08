"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, BookOpen, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const slides = [
  {
    icon: BookOpen,
    title: "Learn From Experts",
    description: "Connect with skilled teachers who are passionate about sharing their knowledge and expertise.",
    color: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Build Your Network",
    description: "Join a community of learners and teachers. Grow together and share experiences.",
    color: "bg-primary/10",
  },
  {
    icon: Zap,
    title: "Fast & Easy",
    description: "Browse skills, request lessons, and start learning in minutes. It's that simple.",
    color: "bg-primary/10",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Card className="border-border bg-card overflow-hidden">
        <CardContent className="p-0">
          <div className="relative min-h-[280px] flex items-center justify-center">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-8 md:p-12 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${slide.color} mb-6`}>
                  <slide.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{slide.title}</h3>
                <p className="text-muted-foreground max-w-2xl">{slide.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-muted-foreground/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
