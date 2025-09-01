"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { Copy } from "lucide-react"
import { toast } from "sonner"
import { CircleCheck } from "lucide-react"

export const SecretPhrase = () => {
    const [open,setOpen] = useState(false);
    const seedPhrase = ["hello", "billy", "bitch", "how's", "life", "going", "hesllo", "bislly", "bitach", "hoaw's", "ldife", "goeing"]

    function copyArray(){
        const textToCopy = seedPhrase.join(", ");

        navigator.clipboard.writeText(textToCopy)
            .then(()=>{
                toast(<div className="flex gap-1"><CircleCheck size={19}/>Copied to Clipboard</div>);
            })
            .catch((err)=>{
                console.error(err.message);
            })
    }
    return <>
        <div className="h-max p-5 w-full cursor-pointer bg-gray-400/12 dark:bg-gray-50/10 px-4 rounded-md">
            <div onClick={()=>setOpen(!open)} className="justify-between flex w-full items-center pt-4">
                <h1 className="text-4xl text-black dark:text-white">Your Secret Phrase</h1>
                <ChevronDown onClick={()=>setOpen(!open)} />
            </div>
            {open&&<div className="grid grid-cols-4 mt-3 gap-3">
                {seedPhrase.map(w=>(<Box string={w} key={w}/>))}
            </div>}
            {open&&<div onClick={()=>copyArray()} className="flex space-x-2 items-center pt-3">
                <Copy className="cursor-pointer"  size={19}/>
                <h3>Click to copy</h3>
            </div>}
        </div>
    </>
}

function Box({ string }: { string: string }) {
    return <div className="h-10 dark:bg-gray-50/15 bg-gray-400/15 w-full hover:bg-gray-400/20 hover:dark:bg-gray-50/20 rounded-md flex items-center justify-center">
        {string}
    </div>
}