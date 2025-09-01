"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Ethereum(){
    const router = useRouter();
    return <div className="text-5xl flex flex-col justify-center items-center font-bold mt-100">
        Banane ko Time nhi bhai 😭
        <p className="text-2xl mt-2">Solana wallet create karo plij</p>
        <Button className="mt-3 text-lg cursor-pointer" onClick={()=>router.push('/solana')} variant="default" >
            Solana 
        </Button>
    </div>
}