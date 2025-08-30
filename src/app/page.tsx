import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="w-full h-[800px] flex items-center justify-center gap-4 flex-col">
      <h1 className="text-5xl font-extrabold">BabyBoy Supports Multiple Blockchains</h1>
      <h2 className="text-2xl">Chose a Chain and Get Started</h2>
      <div className="flex gap-3">
        <Button variant="default" className="text-xl cursor-pointer">Solana</Button>
        <Button variant="default" className="text-xl cursor-pointer">Ethereum</Button>
      </div>
    </div>
  );
}
