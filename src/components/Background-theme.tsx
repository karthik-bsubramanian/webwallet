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
        background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
    } : {
        backgroundImage: `
        radial-gradient(circle 600px at 0% 200px, #d5c5ff, transparent),
        radial-gradient(circle 600px at 100% 200px, #d5c5ff, transparent)
      `
    }
    return theme === 'dark' ? <div className="min-h-screen w-full relative">
        <div className="absolute inset-0 z-0" style={bg}>
        {children}
        </div>
    </div> : <div className="min-h-screen w-full bg-white relative">
        <div className="absolute inset-0 z-0" style={bg}>
            {children}
        </div>
    </div>
}

