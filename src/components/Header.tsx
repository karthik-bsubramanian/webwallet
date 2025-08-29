"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import { ThemeToggle } from "./Theme-toggle"

export const Header = () => {
    return <div className="h-20 w-full flex justify-between items-center">
        <Image
            src="/icon.png"
            alt="Logo"
            width={40}
            height={40}
        />
        <ThemeToggle/>
    </div>
}