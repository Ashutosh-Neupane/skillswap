"use client"

import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"

const categories = ["Programming", "Design", "Business", "Marketing", "Music", "Photography", "Writing", "Languages"]

const levels = ["Beginner", "Intermediate", "Advanced", "Expert"]

export function SkillsFilters() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-semibold">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <Label
                htmlFor={category}
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-sm font-semibold">Experience Level</h3>
        <div className="space-y-3">
          {levels.map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <Checkbox id={level} />
              <Label
                htmlFor={level}
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {level}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">Price Range</h3>
          <span className="text-sm text-muted-foreground">$0 - $200</span>
        </div>
        <Slider defaultValue={[0, 200]} max={200} step={10} />
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-sm font-semibold">Rating</h3>
        <div className="space-y-3">
          {["4.5+", "4.0+", "3.5+", "3.0+"].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox id={rating} />
              <Label
                htmlFor={rating}
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {rating} Stars
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
