"use client"

import { useCallback, useRef, useState, useLayoutEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { flushSync } from "react-dom"
import { cn } from "@/lib/utils"

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

export const AnimatedThemeToggler = ({
  className,
  duration = 500,
  ...props
}: AnimatedThemeTogglerProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  // ✅ Initial theme
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false

    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") return true
    if (savedTheme === "light") return false

    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  // ✅ Sync DOM before paint (NO flicker, NO warning)
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    await document.startViewTransition(() => {
      flushSync(() => {
        setIsDark(prev => !prev)
      })
    }).ready

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()

    const x = left + width / 2
    const y = top + height / 2

    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "cubic-bezier(.4,0,.2,1)",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }, [duration])

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(
        "relative h-10 w-10 rounded-full transition active:scale-90",
        className
      )}
      {...props}
    >
      {/* Background */}
      <span
        className={cn(
          "absolute inset-0 rounded-full transition-all duration-500",
          isDark
            ? "bg-white shadow-inner"
            : "bg-gradient-to-r from-black to-[#2e3033] shadow-inner"
        )}
      />

      {/* Sun */}
      <Sun
        className={cn(
          "absolute inset-0 m-auto h-6 w-6 transition-all duration-500",
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100 text-yellow-500"
        )}
      />

      {/* Moon */}
      <Moon
        className={cn(
          "absolute inset-0 m-auto h-6 w-6 transition-all duration-500",
          isDark
            ? "rotate-0 scale-100 opacity-100 text-black"
            : "-rotate-90 scale-0 opacity-0"
        )}
      />

      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
