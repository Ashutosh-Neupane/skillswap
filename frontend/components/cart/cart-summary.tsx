"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function CartSummary() {
  const subtotal = 180
  const discount = 0
  const total = subtotal - discount

  return (
    <div className="space-y-4 lg:sticky lg:top-20 lg:self-start">
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Subtotal (3 items)</span>
              <span className="font-medium">${subtotal}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Discount</span>
              <span className="font-medium text-green-600">-${discount}</span>
            </div>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <span className="font-semibold">Total</span>
            <span className="text-2xl font-bold">${total}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" size="lg">
            <Send className="mr-2 h-4 w-4" />
            Send Lesson Requests
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Add a Message</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="message">Message to Teachers (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Tell the teachers about your learning goals, availability, or any specific requirements..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="availability">Preferred Availability</Label>
            <Input id="availability" placeholder="e.g., Weekday evenings, Weekend mornings" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Have a Promo Code?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input placeholder="Enter code" />
            <Button variant="outline">Apply</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
