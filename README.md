# BabyBoy Web Wallet 

A modern, secure, and user-friendly web-based cryptocurrency wallet supporting multiple blockchains. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Multi-Blockchain Support**: Currently supports Solana with Ethereum support planned
- **HD Wallet Generation**: Hierarchical Deterministic wallet creation using BIP39 mnemonic phrases
- **Multiple Wallets**: Generate and manage multiple wallets from a single seed phrase
- **Secure Key Management**: Private keys are never stored on servers, only locally

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + Custom components
- **Blockchain**: Solana Web3.js, BIP39, Ed25519
- **State Management**: React Hooks
- **Theming**: next-themes


### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/karthik-bsubramanian/webwallet.git
   cd webwallet
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page with blockchain selection
│   └── solana/            # Solana wallet implementation
│       └── page.tsx       # Solana wallet page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Header.tsx        # Navigation header
│   ├── Wallet.tsx        # Individual wallet display
│   ├── AddWallet.tsx     # Wallet management controls
│   ├── SecretPhrase.tsx  # Mnemonic phrase display
│   └── Theme-provider.tsx # Theme context provider
└── lib/                  # Utility functions
    └── utils.ts          # Helper functions
```

**Built with ❤️ Karthik**
