import { Button } from "./ui/button"
import { Input } from "./ui/input"

export const GenerateWalletPage = () => {
    return <div className="flex gap-2 flex-col h-[500px] pt-20">
        <h1 className="text-6xl font-extrabold">Secret recovery phrase</h1>
        <h2 className="text-2xl font-light mb-3">Save these words in a safe place</h2>
        <div className="flex gap-4">
            <Input type="password" className="h-10 flex items-center" placeholder="Enter your secret phrase (or leave empty to generate)" />
            <Button variant="default" className="cursor-pointer">Generate Wallet</Button>
        </div>
    </div>
}