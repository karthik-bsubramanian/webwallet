"use client";

import { GenerateWalletPage } from "@/components/GenerateWalletPage";
import { SecretPhrase } from "@/components/SecretPhrase";
import { Wallet } from "@/components/Wallet";
import { useState } from "react";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { AddWallet } from "@/components/AddWallet";

export default function Home() {
    const [generated, setGenerated] = useState(false);
    const [mnemonic] = useState(generateMnemonic());
    const [wallets, setWallets] = useState<Keypair[]>([]);

    const addWallet = () => {
        const seed = mnemonicToSeedSync(mnemonic);
        const path = `m/44'/501'/${wallets.length}'/0'`;
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        const keypair = Keypair.fromSeed(derivedSeed);

        setWallets((prev) => [...prev, keypair]);
    };

    return <div>
        {!generated && <GenerateWalletPage addWallet={addWallet} generated={setGenerated} />}
        {generated && <> <SecretPhrase /><AddWallet addWallet={addWallet} setWallets={setWallets} />
            {wallets.map((w, i) => <Wallet key={i} publicKey={w.publicKey.toBase58()} privateKey={Buffer.from(w.secretKey).toString("hex")} index={i} />)}
        </>}    </div>
}