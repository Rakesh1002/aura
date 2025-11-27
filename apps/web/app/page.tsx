"use client";

import { BackgroundEffects } from "./components/background";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { AppStoreButtons } from "./components/buttons";

const vibes = [
  { name: "Hinge Hero", emoji: "💘", color: "from-pop-pink to-pop-coral", description: "Date-ready shots", scenes: ["Coffee Date", "Dog Park", "Cooking Class"] },
  { name: "Euro Summer", emoji: "🌊", color: "from-pop-blue to-pop-purple", description: "Mediterranean dreams", scenes: ["Amalfi Coast", "Paris Café", "Santorini"] },
  { name: "Old Money", emoji: "🎾", color: "from-pop-lime to-pop-blue", description: "Quiet luxury aesthetic", scenes: ["Tennis Court", "Yacht Club", "Garden Party"] },
  { name: "Executive", emoji: "💼", color: "from-pop-purple to-pop-pink", description: "Power moves only", scenes: ["TED Talk", "Boardroom", "Podcast Guest"] },
  { name: "Wanderlust", emoji: "✈️", color: "from-pop-orange to-pop-yellow", description: "Travel the world", scenes: ["Tokyo Nights", "Safari", "Northern Lights"] },
  { name: "Night Out", emoji: "🪩", color: "from-pop-pink to-pop-purple", description: "Main character energy", scenes: ["Rooftop Bar", "Art Gallery", "VIP Lounge"] },
];

const features = [
  { icon: "🔮", title: "Identity Vault", description: "Upload once, stay consistent forever. Your face, your style, across every vibe." },
  { icon: "✨", title: "Candid Mode", description: "Photos that look like your friend took them, not a robot. Real imperfections included." },
  { icon: "🎬", title: "Magic Mirror", description: "'Make me smile less.' 'Look to the left.' Direct your shots with words." },
  { icon: "⚡", title: "Instant Previews", description: "See results in seconds, not minutes. Powered by on-device AI." }
];

const howItWorks = [
  { step: "01", title: "Upload your photos", description: "Add 10-15 photos of yourself", icon: "📸" },
  { step: "02", title: "Pick a vibe", description: "Choose from curated aesthetics", icon: "🎨" },
  { step: "03", title: "Generate magic", description: "AI creates stunning photos", icon: "✨" },
  { step: "04", title: "Share everywhere", description: "Download and post anywhere", icon: "🚀" },
];

const faqs = [
  { q: "Will the photos actually look like me?", a: "Yes! Our Identity Vault technology ensures your face stays consistent across all generated images." },
  { q: "Do the photos look fake or AI-generated?", a: "Our Candid Mode adds natural imperfections to make photos look authentic — like a friend took them." },
  { q: "Is my data private and secure?", a: "Absolutely. Your photos are processed on-device when possible, and we never share or sell your data." },
  { q: "Can I use these photos on dating apps?", a: "Yes! Many users create photos specifically for Hinge, Tinder, and Bumble." },
];

const stats = [
  { value: "4K", label: "Resolution" },
  { value: "14+", label: "Reference Photos" },
  { value: "100%", label: "Your Face" },
  { value: "∞", label: "Possibilities" }
];

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 sm:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-8 sm:mb-10">
            <span className="w-2 h-2 rounded-full bg-pop-lime animate-pulse" />
            <span className="text-xs sm:text-sm font-medium font-[family-name:var(--font-jakarta)] text-white/80">Powered by Gemini 3 Pro</span>
          </div>
          
          <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-[family-name:var(--font-syne)] leading-[1.1] tracking-tight mb-6 sm:mb-8 animate-fade-up stagger-1">
            Your<span className="text-gradient"> digital </span><br />photographer
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-xl sm:max-w-2xl mx-auto mb-10 sm:mb-12 font-[family-name:var(--font-jakarta)] leading-relaxed animate-fade-up stagger-2">
            AI-powered lifestyle photos that look like you, on your best day. Dating profiles, travel content, social media — all in one tap.
          </p>
          
          <div className="animate-fade-up stagger-3 flex justify-center">
            <AppStoreButtons />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-24 animate-fade-up stagger-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-syne)] text-gradient-warm">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/50 font-[family-name:var(--font-jakarta)] mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce text-white/40">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* Vibes Section */}
      <section id="vibes" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-pop-pink font-semibold font-[family-name:var(--font-jakarta)] text-xs sm:text-sm tracking-wider uppercase">Curated Aesthetics</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] mt-3 sm:mt-4">Pick your <span className="text-gradient">vibe</span></h2>
            <p className="text-white/60 mt-3 sm:mt-4 max-w-md sm:max-w-lg mx-auto text-sm sm:text-base font-[family-name:var(--font-jakarta)]">No prompts needed. Just tap a vibe and let our AI craft the perfect scene.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {vibes.map((vibe) => (
              <div key={vibe.name} className="vibe-card glass-card p-4 sm:p-6 cursor-pointer group">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${vibe.color} flex items-center justify-center text-xl sm:text-2xl`}>{vibe.emoji}</div>
                    <div>
                      <h3 className="font-bold font-[family-name:var(--font-syne)] text-base sm:text-lg">{vibe.name}</h3>
                      <p className="text-white/50 text-xs sm:text-sm font-[family-name:var(--font-jakarta)]">{vibe.description}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {vibe.scenes.map(scene => (
                    <span key={scene} className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-medium font-[family-name:var(--font-jakarta)] text-white/70">{scene}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-pop-orange font-semibold font-[family-name:var(--font-jakarta)] text-xs sm:text-sm tracking-wider uppercase">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] mt-3 sm:mt-4">How it <span className="text-gradient-warm">works</span></h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {howItWorks.map((item, i) => (
              <div key={i} className="glass-card p-5 sm:p-6 text-center group">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div className="text-pop-pink font-bold font-[family-name:var(--font-syne)] text-xs sm:text-sm mb-2">STEP {item.step}</div>
                <h3 className="font-bold font-[family-name:var(--font-syne)] text-base sm:text-lg mb-2">{item.title}</h3>
                <p className="text-white/50 text-xs sm:text-sm font-[family-name:var(--font-jakarta)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-pop-blue font-semibold font-[family-name:var(--font-jakarta)] text-xs sm:text-sm tracking-wider uppercase">Powerful Features</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] mt-3 sm:mt-4">Magic <span className="text-gradient">under the hood</span></h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card p-5 sm:p-6 md:p-8 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-[family-name:var(--font-syne)] mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-white/60 text-sm sm:text-base font-[family-name:var(--font-jakarta)] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-pop-purple font-semibold font-[family-name:var(--font-jakarta)] text-xs sm:text-sm tracking-wider uppercase">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-syne)] mt-3 sm:mt-4">FAQ</h2>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card group">
                <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer list-none">
                  <span className="font-semibold font-[family-name:var(--font-syne)] text-sm sm:text-base md:text-lg pr-4">{faq.q}</span>
                  <span className="text-pop-pink text-xl sm:text-2xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                  <p className="text-white/60 text-sm sm:text-base font-[family-name:var(--font-jakarta)] leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pop-pink/20 via-transparent to-pop-blue/20" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-syne)] mb-4 sm:mb-6">Ready to glow up? ✨</h2>
              <p className="text-white/60 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto font-[family-name:var(--font-jakarta)]">Download now and start creating stunning lifestyle photos in minutes.</p>
              <AppStoreButtons className="justify-center" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
