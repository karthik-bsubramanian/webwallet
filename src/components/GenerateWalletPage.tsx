import { AnimatedCard } from "./AnimateCard";
import { Button } from "./ui/button"
import { Input } from "./ui/input"

type generateWalletProps = {
    generated: (s:true|false)=>void;
    addWallet: ()=>void;
}

export const GenerateWalletPage = ({generated,addWallet}:generateWalletProps) => {
    return <AnimatedCard><div className="flex gap-2 flex-col h-max">
        <h1 className="text-6xl font-extrabold">Secret recovery phrase</h1>
        <h2 className="text-2xl font-light mb-3">Save these words in a safe place</h2>
        <div className="flex gap-4">
            <Input type="password" className="h-10 flex items-center" placeholder="Enter your secret phrase (or leave empty to generate)" />
            <Button onClick={()=>{
                generated(true);
                addWallet();
                }} variant="default" className="cursor-pointer">Generate Wallet</Button>
        </div>
    </div></AnimatedCard>
}

