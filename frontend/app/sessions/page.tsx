import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UpcomingSessions } from "@/components/sessions/upcoming-sessions"
import { PendingRequests } from "@/components/sessions/pending-requests"
import { CompletedSessions } from "@/components/sessions/completed-sessions"

export const metadata: Metadata = {
  title: "My Sessions - SkillShare",
  description: "Manage your lesson sessions and requests",
}

export default function SessionsPage() {
  return (
    <div className="w-full py-8 md:py-12 animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">My Sessions</h1>
            <p className="text-muted-foreground">
              Manage your upcoming lessons, pending requests, and completed sessions
            </p>
          </div>

          <Tabs defaultValue="upcoming" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6">
              <UpcomingSessions />
            </TabsContent>

            <TabsContent value="pending" className="space-y-6">
              <PendingRequests />
            </TabsContent>

            <TabsContent value="completed" className="space-y-6">
              <CompletedSessions />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
