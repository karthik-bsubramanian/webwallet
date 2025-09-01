# BabyBoy Web Wallet 🚀

A modern, secure, and user-friendly web-based cryptocurrency wallet supporting multiple blockchains. Built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Features

- **Multi-Blockchain Support**: Currently supports Solana with Ethereum support planned
- **HD Wallet Generation**: Hierarchical Deterministic wallet creation using BIP39 mnemonic phrases
- **Multiple Wallets**: Generate and manage multiple wallets from a single seed phrase
- **Secure Key Management**: Private keys are never stored on servers, only locally
- **Dark/Light Theme**: Built-in theme switching with system preference detection
- **Responsive Design**: Modern UI built with Tailwind CSS and Radix UI components
- **Type Safety**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + Custom components
- **Blockchain**: Solana Web3.js, BIP39, Ed25519
- **State Management**: React Hooks
- **Theming**: next-themes
- **Notifications**: Sonner toast notifications

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
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

## 📱 Usage

### Creating Your First Wallet

1. **Navigate to Solana**: Click on the Solana button from the home page
2. **Generate Wallet**: Click "Generate Wallet" to create your first wallet
3. **Save Seed Phrase**: Your 12-word mnemonic phrase will be displayed - **SAVE THIS SECURELY**
4. **Add Wallets**: Generate additional wallets from the same seed phrase
5. **Manage Keys**: View public keys and toggle private key visibility

### Wallet Management

- **Multiple Wallets**: Create up to 10 wallets from a single seed phrase
- **HD Derivation**: Each wallet uses a different derivation path for security
- **Key Export**: Copy your seed phrase or individual wallet keys
- **Clear All**: Remove all wallets (use with caution)

## 🔐 Security Features

- **Local Storage**: All keys are generated and stored locally in your browser
- **BIP39 Standard**: Industry-standard mnemonic phrase generation
- **HD Wallets**: Hierarchical deterministic wallet structure
- **No Server Storage**: Private keys never leave your device
- **Secure Derivation**: Ed25519 key derivation following BIP44 standards

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

## 🎨 Customization

### Themes
The wallet supports both light and dark themes with automatic system preference detection. Customize themes in `src/components/Theme-provider.tsx`.

### Styling
All styling is done with Tailwind CSS. Modify `src/app/globals.css` for global style changes.

### Adding New Blockchains
To add support for new blockchains:

1. Create a new route in `src/app/[blockchain]/page.tsx`
2. Implement wallet generation logic using appropriate libraries
3. Add the blockchain to the home page selection
4. Update the README with new blockchain information

## 🧪 Development

### Code Quality
- **ESLint**: Configured with Next.js recommended rules
- **TypeScript**: Strict type checking enabled
- **Prettier**: Code formatting (if configured)

### Available Scripts
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

**This is a development project and should not be used for storing real funds without thorough security auditing.**

- Never share your seed phrase or private keys
- Test thoroughly on testnets before mainnet use
- Consider using hardware wallets for large amounts
- This wallet stores keys locally - ensure your device is secure

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include your browser, OS, and steps to reproduce

## 🔮 Roadmap

- [ ] Ethereum wallet support
- [ ] Bitcoin wallet support
- [ ] Hardware wallet integration
- [ ] Multi-signature wallets
- [ ] DeFi protocol integration
- [ ] Mobile app version
- [ ] Advanced security features

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
