"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const buttonVariants = {
  default: "bg-black text-white hover:bg-neutral-800",
  destructive: "bg-red-500 text-white hover:bg-red-600",
  outline: "border border-gray-300 hover:bg-gray-100",
}

const Button = React.forwardRef(({ className, variant = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn("px-4 py-2 rounded text-sm font-medium", buttonVariants[variant], className)}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button }
