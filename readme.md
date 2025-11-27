# Aura

> The Next-Generation Lifestyle Studio - Your Personal Digital Photographer & Stylist

Aura is a category-defining lifestyle photo application that leverages Google's Gemini AI to create personalized, consistent lifestyle images. Unlike generic image generators, Aura focuses on **identity orchestration** - maintaining facial and stylistic consistency across all generated images while providing curated aesthetic templates for specific use cases like dating profiles, social media content, and digital influencer creation.

## 🎯 Overview

Aura solves the "identity fragmentation" problem in generative AI by providing:

- **Identity Vault**: Upload once, stay consistent forever. Your face and style are maintained across every generated image.
- **Vibe Marketplace**: Curated aesthetic packs (Hinge Hero, Euro Summer, Old Money, Executive, etc.) instead of complex text prompts.
- **Magic Mirror**: Conversational editing - "Make me smile less," "Look to the left," "Change the drink to iced coffee."
- **Authenticity Engine**: Post-processing that adds film grain, noise, and imperfections to combat the "AI look."

## 🏗️ Architecture

This is a monorepo containing:

- **`apps/mobile`**: React Native/Expo mobile application for iOS and Android
- **`apps/web`**: Next.js web application for marketing and web presence
- **`strategy/`**: Strategic documentation and product thesis

### Tech Stack

**Mobile App:**
- React Native with Expo (~54.0.10)
- Expo Router for file-based routing
- Zustand for state management
- Google Gemini API (Gemini 2.5 Flash & Gemini 3 Pro) for image generation
- React Native Purchases for in-app subscriptions

**Web App:**
- Next.js 16.0.5
- React 19.2.0
- Tailwind CSS 4
- TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Expo CLI (for mobile development)
- Google Gemini API key
- iOS Simulator / Android Emulator (for mobile testing)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd aura
   ```

2. **Install dependencies for mobile app:**
   ```bash
   cd apps/mobile
   npm install
   ```

3. **Install dependencies for web app:**
   ```bash
   cd apps/web
   npm install
   ```

4. **Set up environment variables:**

   For mobile app (`apps/mobile/.env`):
   ```env
   EXPO_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   ```

   For web app (`apps/web/.env.local`):
   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   ```

### Running the Applications

**Mobile App:**
```bash
cd apps/mobile
npm start
# Then press 'i' for iOS simulator, 'a' for Android emulator, or scan QR code with Expo Go
```

**Web App:**
```bash
cd apps/web
npm run dev
# Open http://localhost:3000
```

## 📱 Mobile App Features

### Core Features

- **Identity Vault**: Secure storage of facial embeddings for consistent image generation
- **Vibe Packs**: Pre-curated aesthetic templates (Hinge Hero, Euro Summer, Old Money, Executive, Wanderlust, Night Out)
- **Studio Mode**: Generate, edit, and compare images
- **Vault**: Browse and manage your generated creations
- **Referral System**: Share and earn credits

### Navigation Structure

- **Onboarding**: Initial identity setup and photo upload
- **Tabs**:
  - Home: Main feed and quick actions
  - Studio: Image generation and editing
  - Vault: Saved creations
  - Explore: Discover new vibes and templates
  - Referral: Share and earn

### Development Workflows

The mobile app uses EAS Workflows for automation:

- `npm run draft`: Publish a preview update
- `npm run development-builds`: Create development builds
- `npm run deploy`: Deploy to production (App Store/Play Store)

## 🌐 Web App Features

The web app serves as the marketing and landing page for Aura, featuring:

- Product showcase and feature highlights
- App Store download links
- Privacy policy and terms of service
- Support page

## 🔐 API Integration

Aura uses Google's Gemini API for image generation:

- **Gemini 2.5 Flash**: Fast image generation for quick previews
- **Gemini 3 Pro**: High-quality generation with reasoning capabilities

The service is configured in `apps/mobile/services/gemini.ts` and supports:
- Reference image injection (Identity Vault)
- Aspect ratio control (1:1, 4:5, 16:9, 9:16)
- Image editing capabilities
- System instructions for style consistency

## 📁 Project Structure

```
aura/
├── apps/
│   ├── mobile/          # React Native/Expo mobile app
│   │   ├── app/         # Expo Router pages
│   │   ├── components/  # Reusable UI components
│   │   ├── services/    # API services (Gemini)
│   │   ├── store/       # Zustand state management
│   │   ├── constants/   # App constants and themes
│   │   └── hooks/       # Custom React hooks
│   └── web/             # Next.js web app
│       ├── app/         # Next.js App Router pages
│       └── public/      # Static assets
├── strategy/            # Strategic documentation
│   ├── thesis.md       # Product strategy and roadmap
│   └── gemini_docs.md  # Gemini API documentation
└── readme.md           # This file
```

## 🎨 Design Philosophy

Aura is designed with a dark-first UI (`userInterfaceStyle: "dark"`) and focuses on:

- **Simplicity**: Abstract complex AI prompts into simple visual selections
- **Consistency**: Maintain identity across all generated images
- **Authenticity**: Post-process images to look natural, not AI-generated
- **Speed**: Leverage on-device AI for instant previews

## 🔒 Privacy & Security

- Identity Vault data is stored securely on-device
- API keys are managed through environment variables
- No user data is shared with third parties beyond necessary API calls
- See `apps/web/app/privacy/page.tsx` for full privacy policy

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For questions or support, please contact the maintainers.

## 📚 Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Google Gemini API](https://ai.google.dev/docs)
- [Product Strategy](./strategy/thesis.md)

## 🚧 Roadmap

See `strategy/thesis.md` for detailed product roadmap and strategic vision.

Key upcoming features:
- Enhanced Identity Vault with outfit locking
- Real-time grounding with Google Search for location accuracy
- Advanced Magic Mirror editing capabilities
- Social sharing and community features

---

**Built with ❤️ using React Native, Next.js, and Google Gemini AI**

