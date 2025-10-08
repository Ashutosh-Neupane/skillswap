import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileHeader } from "@/components/profile/profile-header"
import { MySkills } from "@/components/profile/my-skills"
import { LearningProgress } from "@/components/profile/learning-progress"
import { ProfileSettings } from "@/components/profile/profile-settings"

export const metadata: Metadata = {
  title: "My Profile - SkillShare",
  description: "Manage your profile and skills",
}

export default function ProfilePage() {
  return (
    <div className="w-full py-8 md:py-12 animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <ProfileHeader />

          <Tabs defaultValue="skills" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto">
              <TabsTrigger value="skills">My Skills</TabsTrigger>
              <TabsTrigger value="learning">Learning</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="skills" className="space-y-6">
              <MySkills />
            </TabsContent>

            <TabsContent value="learning" className="space-y-6">
              <LearningProgress />
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <ProfileSettings />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
