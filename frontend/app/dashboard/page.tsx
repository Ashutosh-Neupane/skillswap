"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  ShoppingCart,
  Calendar,
  MessageSquare,
  User,
  Menu,
  X,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const sidebarLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/cart", label: "Learning Cart", icon: ShoppingCart },
  { href: "/sessions", label: "Sessions", icon: Calendar },
  { href: "/messages", label: "Messages", icon: MessageSquare },
  { href: "/profile", label: "Profile", icon: User },
]

const upcomingSessions = [
  {
    id: 1,
    skill: "Web Design Fundamentals",
    teacher: "Sarah Johnson",
    date: "Today, 2:00 PM",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    skill: "Advanced JavaScript",
    teacher: "Michael Chen",
    date: "Tomorrow, 10:00 AM",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const pendingRequests = [
  {
    id: 1,
    skill: "UI/UX Design",
    student: "Emily Rodriguez",
    date: "Requested 2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    skill: "React Development",
    student: "David Kim",
    date: "Requested 1 day ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-64 border-r border-border bg-background transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-6">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="space-y-1 p-4">
          {sidebarLinks.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                {link.label}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Mobile Header */}
        <div className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background px-6 lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 lg:p-8 animate-fade-in">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
            <p className="text-muted-foreground">Here's what's happening with your learning journey</p>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Next session in 3 hours</p>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Awaiting your response</p>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed Sessions</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 from last week</p>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Skills Learning</CardTitle>
                <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">Active learning paths</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Upcoming Sessions */}
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Your scheduled learning sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={session.avatar || "/placeholder.svg"} alt={session.teacher} />
                      <AvatarFallback>{session.teacher.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{session.skill}</p>
                      <p className="text-sm text-muted-foreground">with {session.teacher}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{session.date}</Badge>
                    </div>
                  </div>
                ))}
                <Link href="/sessions">
                  <Button variant="outline" className="w-full bg-transparent">
                    View All Sessions
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pending Requests */}
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Pending Requests</CardTitle>
                <CardDescription>Students waiting for your approval</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pendingRequests.map((request) => (
                  <div key={request.id} className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.student} />
                      <AvatarFallback>{request.student.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{request.skill}</p>
                      <p className="text-sm text-muted-foreground">{request.student}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Decline
                      </Button>
                      <Button size="sm">Accept</Button>
                    </div>
                  </div>
                ))}
                <Link href="/sessions">
                  <Button variant="outline" className="w-full bg-transparent">
                    View All Requests
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
