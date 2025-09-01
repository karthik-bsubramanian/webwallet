"use client";

import { Eye, EyeClosed } from "lucide-react"
import { useState } from "react"
import { AnimatedCard } from "./AnimateCard";

type walletProps= {
    publicKey: string;
    privateKey: string;
    index: number;
}
export const Wallet = ({publicKey,privateKey,index}: walletProps) => {
    const [visible, setVisible] = useState(false);
    return <AnimatedCard> <div className="h-max w-full p-4 bg-gray-400/12 dark:bg-gray-50/10 mt-10 rounded-md">
        <h1 className="text-4xl">Wallet {index}</h1>
        <div className="bg-gray-400/17 dark:bg-gray-50/15 mt-2 rounded-lg p-1">

            <div className="flex flex-col">
                <h1 className="text-2xl font-black">Public key</h1>
                <p className="h-5 flex items-center my-2 text-md font-serif font-extralight px-2 tracking-wider">{publicKey}</p>
            </div>
            <div className="flex flex-col mt-4">
                <h1 className="text-2xl font-black">Private Key</h1>
                <div className="flex items-center justify-between px-2">
                    <p className={`text-md flex font-serif items-center my-2 font-extralight tracking-wider`}>{visible ? privateKey : "..................................................................................................................................................................................................................................."}</p>
                    <div className="cursor-pointer" onClick={() => setVisible(!visible)}>
                        {visible ? <EyeClosed /> : <Eye />}
                    </div>
                </div>
            </div>
        </div>
    </div></AnimatedCard>
}