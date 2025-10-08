"use client"

import { SkillCard } from "@/components/browse/skill-card"

const mockSkills = [
  {
    id: "1",
    title: "Web Development with React",
    teacher: "Sarah Johnson",
    teacherImage: "/diverse-classroom-teacher.png",
    category: "Programming",
    level: "Intermediate",
    price: 50,
    rating: 4.9,
    reviews: 234,
    students: 1250,
    description: "Learn modern web development with React, Next.js, and TypeScript",
  },
  {
    id: "2",
    title: "UI/UX Design Fundamentals",
    teacher: "Michael Chen",
    teacherImage: "/diverse-designers-brainstorming.png",
    category: "Design",
    level: "Beginner",
    price: 40,
    rating: 4.8,
    reviews: 189,
    students: 890,
    description: "Master the principles of user interface and user experience design",
  },
  {
    id: "3",
    title: "Digital Marketing Strategy",
    teacher: "Emily Rodriguez",
    teacherImage: "/marketer.png",
    category: "Marketing",
    level: "Advanced",
    price: 75,
    rating: 4.9,
    reviews: 312,
    students: 1580,
    description: "Build comprehensive digital marketing campaigns that convert",
  },
  {
    id: "4",
    title: "Python for Data Science",
    teacher: "David Kim",
    teacherImage: "/data-scientist.jpg",
    category: "Programming",
    level: "Intermediate",
    price: 60,
    rating: 4.7,
    reviews: 156,
    students: 720,
    description: "Analyze data and build machine learning models with Python",
  },
  {
    id: "5",
    title: "Portrait Photography",
    teacher: "Lisa Anderson",
    teacherImage: "/photographer.png",
    category: "Photography",
    level: "Beginner",
    price: 45,
    rating: 4.8,
    reviews: 203,
    students: 950,
    description: "Capture stunning portraits with professional techniques",
  },
  {
    id: "6",
    title: "Business Strategy & Planning",
    teacher: "James Wilson",
    teacherImage: "/business-meeting-diversity.png",
    category: "Business",
    level: "Advanced",
    price: 80,
    rating: 4.9,
    reviews: 278,
    students: 1340,
    description: "Develop winning business strategies and execution plans",
  },
  {
    id: "7",
    title: "Guitar for Beginners",
    teacher: "Carlos Martinez",
    teacherImage: "/diverse-musician-ensemble.png",
    category: "Music",
    level: "Beginner",
    price: 35,
    rating: 4.7,
    reviews: 145,
    students: 680,
    description: "Learn to play guitar from scratch with easy-to-follow lessons",
  },
  {
    id: "8",
    title: "Creative Writing Workshop",
    teacher: "Amanda Taylor",
    teacherImage: "/writer-at-desk.png",
    category: "Writing",
    level: "Intermediate",
    price: 55,
    rating: 4.8,
    reviews: 167,
    students: 820,
    description: "Develop your storytelling skills and find your unique voice",
  },
  {
    id: "9",
    title: "Spanish Conversation Practice",
    teacher: "Maria Garcia",
    teacherImage: "/language-teacher.jpg",
    category: "Languages",
    level: "Intermediate",
    price: 40,
    rating: 4.9,
    reviews: 289,
    students: 1120,
    description: "Improve your Spanish speaking skills through real conversations",
  },
]

export function SkillsGrid() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{mockSkills.length} skills found</p>
        <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
          <option>Most Popular</option>
          <option>Highest Rated</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {mockSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}
