import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "FAQ - SkillShare",
  description: "Frequently asked questions",
}

export default function FAQPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">Find answers to common questions about SkillShare</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does SkillShare work?</AccordionTrigger>
                <AccordionContent>
                  SkillShare connects learners with teachers through a simple three-step process: Browse skills and add
                  them to your learning cart, send lesson requests to teachers, and once accepted, start your
                  personalized learning sessions. Teachers can also create profiles showcasing their skills and accept
                  requests from interested learners.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How much does it cost?</AccordionTrigger>
                <AccordionContent>
                  Pricing varies by skill and teacher. Each teacher sets their own rates, typically ranging from $30 to
                  $100 per session. You can see the price before adding a skill to your cart. We charge a small platform
                  fee to maintain and improve our services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Can I become a teacher on SkillShare?</AccordionTrigger>
                <AccordionContent>
                  Yes! Anyone with valuable skills to share can become a teacher on SkillShare. Simply create an
                  account, set up your profile, add your skills with descriptions and pricing, and start accepting
                  lesson requests. We provide all the tools you need to manage your teaching schedule and communicate
                  with students.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What happens if I need to cancel a session?</AccordionTrigger>
                <AccordionContent>
                  Both teachers and students can cancel sessions with proper notice. If you cancel at least 24 hours
                  before the scheduled session, you'll receive a full refund. Cancellations within 24 hours may incur a
                  cancellation fee. We encourage open communication between teachers and students to reschedule when
                  needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How are payments processed?</AccordionTrigger>
                <AccordionContent>
                  All payments are processed securely through our platform. Students pay when sending lesson requests,
                  and funds are held until the session is completed. Teachers receive payment after successful
                  completion of sessions, minus our platform fee. We support various payment methods including credit
                  cards and digital wallets.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>What if I'm not satisfied with a lesson?</AccordionTrigger>
                <AccordionContent>
                  Your satisfaction is important to us. If you're not satisfied with a lesson, please contact our
                  support team within 48 hours of the session. We'll review your case and may offer a refund or help you
                  find a different teacher. We also encourage you to leave honest reviews to help other learners make
                  informed decisions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>How do I communicate with my teacher/student?</AccordionTrigger>
                <AccordionContent>
                  SkillShare provides a built-in messaging system for communication between teachers and students. You
                  can discuss lesson details, share materials, and coordinate schedules directly through the platform.
                  All communications are private and secure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>Are lessons conducted online or in-person?</AccordionTrigger>
                <AccordionContent>
                  Most lessons on SkillShare are conducted online through video conferencing, making it convenient for
                  both teachers and students regardless of location. However, teachers can specify if they offer
                  in-person lessons in their area. Always discuss and agree on the lesson format before confirming a
                  booking.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger>How do I choose the right teacher?</AccordionTrigger>
                <AccordionContent>
                  Browse teacher profiles to see their experience, qualifications, and teaching style. Check their
                  ratings and read reviews from other students. You can also send messages to teachers before booking to
                  ask questions and ensure they're a good fit for your learning goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger>Is my personal information secure?</AccordionTrigger>
                <AccordionContent>
                  Yes, we take data security seriously. All personal information is encrypted and stored securely. We
                  never share your information with third parties without your consent. Payment information is processed
                  through secure, PCI-compliant payment providers. Read our Privacy Policy for more details.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
