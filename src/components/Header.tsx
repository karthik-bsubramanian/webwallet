"use client"

import Image from "next/image"
import { ThemeToggle } from "./Theme-toggle"
import { useRouter } from "next/navigation"

export const Header = () => {
    const router = useRouter();
    return <div className="h-20 w-full flex justify-between items-center">
        <div className="flex gap-2 items-center">
        <Image
            src="/icon.png"
            alt="Logo"
            width={40}
            height={40}
        />
        <span onClick={()=>router.replace('/')} className="text-2xl cursor-pointer">BabyBoy</span>
        </div>
        <ThemeToggle/>
    </div>
}