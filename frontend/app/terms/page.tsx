import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Service - SkillShare",
  description: "Read our terms of service",
}

export default function TermsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">Last updated: January 8, 2025</p>
        </div>

        <Card>
          <CardContent className="prose prose-gray dark:prose-invert max-w-none p-8">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using SkillShare, you accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to these terms, please do not use our service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              SkillShare provides a platform that connects learners with teachers for personalized skill-sharing
              sessions. Our service facilitates the discovery, booking, and management of learning sessions between
              users.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              To use certain features of our service, you must register for an account. You are responsible for
              maintaining the confidentiality of your account credentials and for all activities that occur under your
              account.
            </p>

            <h2>4. User Conduct</h2>
            <p>
              You agree to use SkillShare only for lawful purposes and in a way that does not infringe the rights of
              others or restrict their use of the platform. Prohibited behavior includes:
            </p>
            <ul>
              <li>Harassing or threatening other users</li>
              <li>Posting false or misleading information</li>
              <li>Attempting to gain unauthorized access to the platform</li>
              <li>Using the service for any illegal activities</li>
            </ul>

            <h2>5. Teacher Responsibilities</h2>
            <p>
              Teachers on SkillShare are responsible for accurately representing their skills, qualifications, and
              availability. Teachers must provide quality instruction and maintain professional conduct during all
              sessions.
            </p>

            <h2>6. Payment Terms</h2>
            <p>
              Payment for lessons is processed through our secure payment system. Teachers receive payment after
              successful completion of sessions, minus our platform fee. Refund policies apply in cases of cancellation
              or disputes.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              All content on SkillShare, including text, graphics, logos, and software, is the property of SkillShare or
              its content suppliers and is protected by intellectual property laws.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              SkillShare is not liable for any direct, indirect, incidental, or consequential damages arising from your
              use of the service. We do not guarantee the quality of instruction provided by teachers on our platform.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material changes via
              email or through the platform. Continued use of the service after changes constitutes acceptance of the
              new terms.
            </p>

            <h2>10. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us at legal@skillshare.com.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
