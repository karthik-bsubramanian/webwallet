import { Heading1 } from "lucide-react"
import { Button } from "./ui/button"
import { Keypair } from "@solana/web3.js"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type addWalletProps = {
    addWallet: () => void;
    setWallets: (w: Keypair[]) => void;
}
export const AddWallet = ({ addWallet, setWallets }: addWalletProps) => {
    return <div className="w-full h-20 flex justify-between my-5">
        <h1 className="text-3xl font-extrabold">Solana Wallet</h1>
        <div className="space-x-3">
            <Button onClick={() => addWallet()} variant="default" className="cursor-pointer">
                Add Wallet
            </Button>
            <AlertDialog>
                <AlertDialogTrigger>Clear Wallets</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure you want to delete all wallets?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your wallets and keys from local storage.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => setWallets([])}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    </div>
}
