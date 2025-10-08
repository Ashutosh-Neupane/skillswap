import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy - SkillShare",
  description: "Read our privacy policy",
}

export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">Last updated: January 8, 2025</p>
        </div>

        <Card>
          <CardContent className="prose prose-gray dark:prose-invert max-w-none p-8">
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Account information (name, email, password)</li>
              <li>Profile information (bio, skills, experience)</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Communication data (messages, reviews, ratings)</li>
              <li>Usage data (browsing history, session information)</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect and prevent fraudulent activities</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with third parties only in the
              following circumstances:
            </p>
            <ul>
              <li>With your consent</li>
              <li>With service providers who assist in our operations</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
              over the internet is 100% secure.
            </p>

            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
            </ul>

            <h2>6. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing activities.
              You can control cookies through your browser settings.
            </p>

            <h2>7. Children's Privacy</h2>
            <p>
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal
              information from children under 13.
            </p>

            <h2>8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. We
              ensure appropriate safeguards are in place for such transfers.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new
              policy on this page and updating the "Last updated" date.
            </p>

            <h2>10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@skillshare.com.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
