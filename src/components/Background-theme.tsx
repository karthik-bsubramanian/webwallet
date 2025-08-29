"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const Backgroundtheme = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false)

    // Prevent hydration mismatch
    useEffect(() => setMounted(true), [])
    if (!mounted) return <div className="min-h-screen w-full">{children}</div>
    const bg = theme === 'dark' ? {
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
    } : {

        backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
        backgroundSize: "40px 40px",
    }
    return theme === 'dark' ? <div className="min-h-screen w-full bg-black relative" style={bg}>
        {children}
    </div> : <div className="min-h-screen w-full bg-white relative" style={bg}>
        {children}
    </div>
}


