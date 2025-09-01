import { Heading1 } from "lucide-react"
import { Button } from "./ui/button"
import { Keypair } from "@solana/web3.js"
type addWalletProps = {
    addWallet: () => void;
    setWallets: (w:Keypair[])=> void;
}
export const AddWallet = ({ addWallet, setWallets }: addWalletProps) => {
    return <div className="w-full h-20 flex justify-between my-5">
        <h1 className="text-3xl font-extrabold">Solana Wallet</h1>
        <div className="space-x-3">
            <Button onClick={() => addWallet()} variant="default" className="cursor-pointer">
                Add Wallet
            </Button>
            <Button onClick={() => setWallets([])} className="cursor-pointer" variant="destructive">clear wallets</Button>
        </div>
    </div>
}