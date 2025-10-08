import type { Metadata } from "next"
import { CartItems } from "@/components/cart/cart-items"
import { CartSummary } from "@/components/cart/cart-summary"

export const metadata: Metadata = {
  title: "Learning Cart - SkillShare",
  description: "Review and request your selected skills",
}

export default function CartPage() {
  return (
    <div className="w-full py-8 md:py-12 animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Learning Cart</h1>
            <p className="text-muted-foreground">Review your selected skills and send lesson requests to teachers</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
            <CartItems />
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  )
}
