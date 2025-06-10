import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gray-200 bg-white p-4 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }) {
  return <div className={cn("mb-2 font-semibold text-lg", className)} {...props} />
}

function CardContent({ className, ...props }) {
  return <div className={cn("text-sm text-gray-600", className)} {...props} />
}

export { Card, CardHeader, CardContent }
