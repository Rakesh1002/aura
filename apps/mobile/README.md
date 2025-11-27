# Aura Mobile App

> React Native/Expo mobile application for iOS and Android

The Aura mobile app is the core experience of the Aura platform - a lifestyle photo generation application that uses Google's Gemini AI to create personalized, consistent lifestyle images with identity orchestration.

## 🎯 Overview

This is the mobile application component of the Aura monorepo. It provides a native mobile experience for generating lifestyle photos with consistent identity across all generated images.

**Key Features:**
- **Identity Vault**: Secure on-device storage of facial embeddings
- **Vibe Marketplace**: Curated aesthetic packs (Hinge Hero, Euro Summer, Old Money, Executive, Wanderlust, Night Out)
- **Studio Mode**: Generate, edit, and compare images
- **Magic Mirror**: Conversational editing capabilities
- **Vault**: Browse and manage generated creations
- **Referral System**: Share and earn credits

## 🏗️ Tech Stack

- **Framework**: React Native with Expo (~54.0.10)
- **Routing**: Expo Router (file-based routing)
- **State Management**: Zustand
- **AI Integration**: Google Gemini API (Gemini 2.5 Flash & Gemini 3 Pro)
- **Payments**: React Native Purchases (RevenueCat)
- **Language**: TypeScript
- **UI**: Custom components with dark-first design

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Expo CLI (installed globally or via npx)
- Google Gemini API key
- iOS Simulator (macOS) or Android Emulator
- Expo Go app (optional, for quick testing)

### Installation

1. **Navigate to the mobile app directory:**
   ```bash
   cd apps/mobile
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env` file in `apps/mobile/`:
   ```env
   EXPO_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   ```

   You can copy from the example:
   ```bash
   cp .env.example .env
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

   This will open the Expo DevTools. You can then:
   - Press `i` to open iOS simulator
   - Press `a` to open Android emulator
   - Scan the QR code with Expo Go app on your device

## 📱 App Structure

### Navigation

The app uses Expo Router for file-based routing:

```
app/
├── (onboarding)/     # Onboarding flow
│   └── index.tsx
├── (tabs)/           # Main tab navigation
│   ├── index.tsx     # Home tab
│   ├── studio.tsx    # Studio tab
│   ├── vault.tsx     # Vault tab
│   ├── explore.tsx   # Explore tab
│   └── referral.tsx  # Referral tab
├── (studio)/         # Studio screens
│   ├── generate.tsx # Image generation
│   └── edit.tsx     # Image editing
└── modal.tsx         # Modal screens
```

### Key Directories

- **`app/`**: Expo Router pages and navigation
- **`components/`**: Reusable UI components
  - `VibeCard.tsx`: Vibe pack display cards
  - `Paywall.tsx`: Subscription paywall
  - `ShareModal.tsx`: Social sharing
  - `CompareScreen.tsx`: Before/after comparison
  - `ui/`: Base UI components (Button, etc.)
- **`services/`**: API services
  - `gemini.ts`: Google Gemini API integration
- **`store/`**: Zustand state management
  - `useStore.ts`: Main app store
  - `identityVault.ts`: Identity Vault state
  - `creations.ts`: Generated images state
- **`constants/`**: App constants
  - `Vibes.ts`: Vibe pack definitions
  - `Colors.ts`: Color palette
  - `theme.ts`: Theme configuration
- **`hooks/`**: Custom React hooks
  - `usePermissions.ts`: Camera/media permissions
  - `use-color-scheme.ts`: Theme detection

## 🎨 Features

### Identity Vault

The Identity Vault stores facial embeddings securely on-device to maintain consistency across all generated images. Users upload 10-15 photos during onboarding, and the app builds a comprehensive vector profile.

**Location**: `store/identityVault.ts`

### Vibe Packs

Pre-curated aesthetic templates that abstract complex AI prompts into simple visual selections:

- **Hinge Hero**: Dating profile optimized shots
- **Euro Summer**: Mediterranean lifestyle aesthetic
- **Old Money**: Quiet luxury aesthetic
- **Executive**: Professional and power-focused
- **Wanderlust**: Travel and adventure
- **Night Out**: Social and nightlife scenes

**Location**: `constants/Vibes.ts`

### Studio Mode

Generate and edit images with:
- Aspect ratio selection (1:1, 4:5, 16:9, 9:16)
- Model selection (Flash for speed, Pro for quality)
- Reference image injection
- Conversational editing ("Make me smile less", etc.)

**Location**: `app/(studio)/`

### Gemini API Integration

The app integrates with Google's Gemini API through the `GeminiService`:

**Location**: `services/gemini.ts`

**Features:**
- Support for Gemini 2.5 Flash (fast) and Gemini 3 Pro (high-quality)
- Reference image injection for identity consistency
- Aspect ratio control
- Image editing capabilities
- System instructions for style consistency

**Usage Example:**
```typescript
import { GeminiService } from './services/gemini';

const result = await GeminiService.generateImage({
  prompt: 'A professional headshot in a modern office',
  referenceImages: [identityVaultImage],
  aspectRatio: '4:5',
  modelType: 'pro',
  systemInstruction: 'Maintain consistent facial features and lighting'
});
```

## 🛠️ Development

### Available Scripts

- `npm start`: Start Expo development server
- `npm run android`: Start on Android emulator
- `npm run ios`: Start on iOS simulator
- `npm run web`: Start web version (for testing)
- `npm run lint`: Run ESLint
- `npm run draft`: Publish preview update (EAS)
- `npm run development-builds`: Create development builds (EAS)
- `npm run deploy`: Deploy to production (EAS)

### EAS Workflows

The app uses Expo Application Services (EAS) for builds and deployments:

- **Preview Updates**: `npm run draft` - Publish OTA updates
- **Development Builds**: `npm run development-builds` - Create dev builds
- **Production**: `npm run deploy` - Deploy to App Store/Play Store

**Configuration**: `eas.json`

### Environment Variables

Required environment variables:

- `EXPO_PUBLIC_GEMINI_API_KEY`: Google Gemini API key

Access via `process.env.EXPO_PUBLIC_GEMINI_API_KEY` in the app.

## 🎨 Design System

### Theme

The app uses a dark-first design (`userInterfaceStyle: "dark"`):

- **Primary Background**: `#0A0A0A`
- **Color Scheme**: Defined in `constants/Colors.ts`
- **Typography**: Custom typography system in `constants/Typography.ts`

### Components

Reusable components follow a consistent design pattern:

- **Themed Components**: `themed-text.tsx`, `themed-view.tsx`
- **UI Components**: Button, Collapsible, etc. in `components/ui/`
- **Feature Components**: VibeCard, Paywall, ShareModal, etc.

## 📦 Dependencies

### Core Dependencies

- `expo`: Expo SDK
- `expo-router`: File-based routing
- `react-native`: React Native framework
- `zustand`: State management
- `react-native-purchases`: In-app subscriptions

### Expo Modules

- `expo-camera`: Camera access
- `expo-image-picker`: Image selection
- `expo-file-system`: File operations
- `expo-haptics`: Haptic feedback
- `expo-blur`: Blur effects
- `expo-linear-gradient`: Gradients

See `package.json` for complete dependency list.

## 🔐 Security & Privacy

- **Identity Vault**: Stored securely on-device, never transmitted
- **API Keys**: Managed via environment variables
- **User Data**: Minimal data collection, privacy-first approach
- **Permissions**: Camera and media library access with user consent

## 🧪 Testing

### Running on Devices

1. **iOS Simulator** (macOS only):
   ```bash
   npm run ios
   ```

2. **Android Emulator**:
   ```bash
   npm run android
   ```

3. **Physical Device**:
   - Install Expo Go from App Store/Play Store
   - Scan QR code from `npm start` output

### Development Builds

For testing native modules and features not available in Expo Go:

```bash
npm run development-builds
```

## 📱 App Configuration

**Location**: `app.json`

Key configuration:
- **Bundle ID**: `com.rakeshroushan1002.aura`
- **Version**: `1.0.0`
- **Orientation**: Portrait
- **UI Style**: Dark
- **EAS Project ID**: Configured for OTA updates

## 🚀 Deployment

### Prerequisites

1. EAS account setup
2. Apple Developer account (for iOS)
3. Google Play Console account (for Android)

### Production Deployment

```bash
npm run deploy
```

This will:
1. Build the app for both platforms
2. Submit to App Store and Play Store
3. Handle code signing automatically

## 📚 Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [React Native Documentation](https://reactnative.dev/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [Google Gemini API](https://ai.google.dev/docs)

## 🔗 Related

- **Main README**: See root `readme.md` for project overview
- **Web App**: See `apps/web/README.md` for web app documentation
- **Strategy**: See `strategy/thesis.md` for product strategy

---

**Part of the Aura monorepo** - Built with React Native, Expo, and Google Gemini AI
