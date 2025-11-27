# Aura Web App

> Next.js marketing and landing page for Aura

The Aura web app serves as the public-facing marketing site and landing page for the Aura mobile application. It showcases features, provides download links, and hosts legal pages.

## 🎯 Overview

This is the web application component of the Aura monorepo. It's a Next.js application that provides:

- **Marketing Landing Page**: Product showcase and feature highlights
- **App Store Links**: Download links for iOS and Android
- **Legal Pages**: Privacy policy, terms of service, and support
- **Responsive Design**: Mobile-first, works on all devices

## 🏗️ Tech Stack

- **Framework**: Next.js 16.0.5 (App Router)
- **React**: 19.2.0
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- (Optional) Vercel account for deployment

### Installation

1. **Navigate to the web app directory:**
   ```bash
   cd apps/web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables (if needed):**
   
   Create a `.env.local` file in `apps/web/`:
   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   Note: The web app may not require the Gemini API key if it's purely marketing-focused.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
app/
├── components/          # React components
│   ├── background.tsx  # Background effects
│   ├── buttons.tsx     # App Store buttons
│   ├── footer.tsx      # Footer component
│   └── navigation.tsx  # Navigation bar
├── page.tsx            # Home/landing page
├── privacy/            # Privacy policy page
│   └── page.tsx
├── support/            # Support page
│   └── page.tsx
├── terms/              # Terms of service page
│   └── page.tsx
├── layout.tsx         # Root layout
└── globals.css        # Global styles
```

### Key Files

- **`app/page.tsx`**: Main landing page with feature showcase
- **`app/layout.tsx`**: Root layout with metadata and fonts
- **`app/globals.css`**: Global styles and Tailwind configuration
- **`app/components/`**: Reusable React components
- **`public/`**: Static assets (images, icons, etc.)

## 🎨 Features

### Landing Page

The main landing page (`app/page.tsx`) includes:

- **Hero Section**: Main value proposition
- **Vibe Showcase**: Visual display of available vibe packs
  - Hinge Hero
  - Euro Summer
  - Old Money
  - Executive
  - Wanderlust
  - Night Out
- **Feature Highlights**: Key features with icons
  - Identity Vault
  - Candid Mode
  - Magic Mirror
  - Instant Previews
- **How It Works**: Step-by-step user journey
- **App Store Buttons**: Download links for iOS and Android
- **Footer**: Links to legal pages and social media

### Legal Pages

- **Privacy Policy** (`app/privacy/page.tsx`): Data collection and usage
- **Terms of Service** (`app/terms/page.tsx`): Terms and conditions
- **Support** (`app/support/page.tsx`): Support and contact information

### Components

#### Background Effects
**Location**: `app/components/background.tsx`

Provides animated background effects for visual appeal.

#### App Store Buttons
**Location**: `app/components/buttons.tsx`

Displays download buttons for:
- App Store (iOS)
- Google Play (Android)

#### Navigation
**Location**: `app/components/navigation.tsx`

Main navigation bar with links to:
- Home
- Features
- Support
- Legal pages

#### Footer
**Location**: `app/components/footer.tsx`

Footer with:
- Links to legal pages
- Social media links
- Copyright information

## 🛠️ Development

### Available Scripts

- `npm run dev`: Start development server (http://localhost:3000)
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

### Development Workflow

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Edit files**: The page auto-updates as you edit files

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Test production build:**
   ```bash
   npm run start
   ```

## 🎨 Styling

### Tailwind CSS

The app uses Tailwind CSS 4 for styling:

- **Configuration**: `postcss.config.mjs`
- **Global Styles**: `app/globals.css`
- **Utility Classes**: Used throughout components

### Design System

The web app maintains visual consistency with the mobile app:

- **Dark Theme**: Dark-first design
- **Gradient Colors**: Pop colors (pink, coral, blue, purple, etc.)
- **Typography**: Modern, clean fonts
- **Responsive**: Mobile-first approach

### Custom Colors

Tailwind is configured with custom color palette matching the mobile app's vibe system.

## 📦 Dependencies

### Core Dependencies

- `next`: Next.js framework
- `react`: React library
- `react-dom`: React DOM rendering
- `typescript`: TypeScript support

### Dev Dependencies

- `@tailwindcss/postcss`: Tailwind CSS PostCSS plugin
- `tailwindcss`: Tailwind CSS framework
- `eslint`: Linting
- `eslint-config-next`: Next.js ESLint config

See `package.json` for complete dependency list.

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using Vercel:

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

   Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms

Next.js can be deployed to any platform that supports Node.js:

- **Netlify**: Automatic Next.js support
- **AWS Amplify**: Full Next.js support
- **Self-hosted**: Run `npm run build && npm run start`

### Environment Variables

If deploying to Vercel or other platforms, set environment variables in the platform's dashboard:

- `NEXT_PUBLIC_GEMINI_API_KEY`: (if needed for any API calls)

## 🔧 Configuration

### Next.js Config

**Location**: `next.config.ts`

Current configuration:
- TypeScript support
- Standard Next.js settings

### TypeScript Config

**Location**: `tsconfig.json`

Configured for Next.js App Router with strict type checking.

### ESLint Config

**Location**: `eslint.config.mjs`

Uses Next.js recommended ESLint configuration.

## 📱 Responsive Design

The web app is fully responsive:

- **Mobile**: Optimized for mobile devices
- **Tablet**: Responsive layout for tablets
- **Desktop**: Full-featured desktop experience

## 🔗 Integration with Mobile App

The web app serves as a marketing funnel:

1. **Landing Page**: Attracts users and explains value proposition
2. **App Store Buttons**: Direct users to download mobile app
3. **Legal Pages**: Provide required legal information
4. **Support**: Help users get started

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)

## 🔗 Related

- **Main README**: See root `readme.md` for project overview
- **Mobile App**: See `apps/mobile/README.md` for mobile app documentation
- **Strategy**: See `strategy/thesis.md` for product strategy

---

**Part of the Aura monorepo** - Built with Next.js and Tailwind CSS
