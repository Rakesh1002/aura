"use client";

import { BackgroundEffects, PageHeader } from "../components/background";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

const faqs = [
  {
    category: "Getting Started",
    icon: "📱",
    questions: [
      {
        q: "How do I download the Aura app?",
        a: "Aura is available on both iOS and Android. Visit the App Store or Google Play Store and search for 'Aura' or click the download links on our homepage. The app is free to download with optional in-app purchases."
      },
      {
        q: "How do I create my Identity Vault?",
        a: "After downloading, open the app and tap 'Get Started'. You'll be guided to upload 10-15 photos of yourself from different angles and lighting conditions. Our AI analyzes these to create your unique identity profile that ensures consistency across all generated images."
      },
      {
        q: "What photos should I upload?",
        a: "For best results, upload: 5 close-up face shots, 3-4 full body photos, 2-3 side profile images, and photos in different lighting (natural, indoor). Avoid heavily filtered photos, group shots, or images where your face is partially obscured."
      },
      {
        q: "How do I choose a vibe?",
        a: "Once your Identity Vault is set up, browse our Vibe Marketplace. Each vibe pack contains curated scenarios (like 'Coffee Date' or 'Beach Vacation'). Simply tap a vibe, select a scenario, and hit generate. No prompts needed!"
      }
    ]
  },
  {
    category: "Identity Vault",
    icon: "🔮",
    questions: [
      {
        q: "Can I update my Identity Vault?",
        a: "Yes! Go to Settings > Identity Vault > Update Photos. You can add new photos or remove existing ones. This is useful if you've changed your hairstyle, grown a beard, or want to add more variety to your reference images."
      },
      {
        q: "How do I delete my Identity Vault?",
        a: "Go to Settings > Identity Vault > Delete Vault. This permanently removes all your uploaded photos and identity data from our servers. Note: This action cannot be undone and you'll need to create a new vault to use the app again."
      },
      {
        q: "Is my Identity Vault secure?",
        a: "Absolutely. Your photos are encrypted using AES-256 encryption both in transit and at rest. We use on-device processing when possible, and your identity data is never shared with third parties. You can delete your data at any time."
      },
      {
        q: "Can I have multiple profiles?",
        a: "Currently, each account supports one Identity Vault. If you need to generate images for different people, each person would need their own account with their own photos uploaded."
      }
    ]
  },
  {
    category: "Generating Photos",
    icon: "✨",
    questions: [
      {
        q: "Why don't the generated photos look like me?",
        a: "This usually happens when the reference photos aren't diverse enough. Try uploading more photos with different angles, expressions, and lighting. Make sure your face is clearly visible and not obscured in any of the reference images."
      },
      {
        q: "What is Candid Mode?",
        a: "Candid Mode adds natural imperfections to make photos look authentic rather than AI-perfect. It introduces subtle elements like slight motion blur, natural skin texture, and realistic lighting variations — making photos look like a friend took them."
      },
      {
        q: "How does Magic Mirror work?",
        a: "Magic Mirror lets you refine generated images using natural language. Tap on any generated image and give commands like 'Make me smile more', 'Look to the left', or 'Change the background to sunset'. The AI modifies only what you request while keeping your identity consistent."
      },
      {
        q: "What resolution are the generated images?",
        a: "Preview images are generated at 512px for fast iteration. When you're happy with a result, you can download the full resolution version at up to 4K (4096x4096). High-res downloads require credits or a subscription."
      }
    ]
  },
  {
    category: "Purchases & Billing",
    icon: "💳",
    questions: [
      {
        q: "What's included in the free version?",
        a: "Free users get unlimited low-resolution previews, access to all vibes for previewing, and 3 high-resolution downloads per month. No credit card required to start."
      },
      {
        q: "How do subscriptions work?",
        a: "Aura Pro subscription gives you unlimited high-res downloads, priority generation, early access to new vibes, and exclusive features like Magic Mirror. Subscriptions are billed monthly or annually through the App Store or Google Play."
      },
      {
        q: "How do I request a refund?",
        a: "Refunds are handled by Apple (iOS) or Google (Android). For iOS, visit reportaproblem.apple.com. For Android, go to Google Play > Account > Order History. If you have issues, contact our support team and we'll help guide you through the process."
      },
      {
        q: "How do I restore my purchases?",
        a: "Go to Settings > Account > Restore Purchases. Make sure you're signed in with the same Apple ID or Google account you used for the original purchase. If purchases don't restore, try signing out and back into the store."
      }
    ]
  }
];

export default function SupportPage() {
  return (
    <>
      <BackgroundEffects />
      <Navigation />
      
      <PageHeader 
        title="Help Center"
        subtitle="Find answers to common questions about Aura"
      />
      
      {/* FAQ Sections */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {faqs.map((category) => (
            <div key={category.category}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">{category.icon}</span>
                <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)]">
                  {category.category}
                </h2>
              </div>
              
              {/* Questions */}
              <div className="space-y-3">
                {category.questions.map((faq, i) => (
                  <details key={i} className="glass-card group">
                    <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer list-none">
                      <span className="font-medium font-[family-name:var(--font-jakarta)] text-sm sm:text-base pr-4">
                        {faq.q}
                      </span>
                      <span className="text-pop-pink text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                      <p className="text-white/60 text-sm sm:text-base font-[family-name:var(--font-jakarta)] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-6 sm:p-8 md:p-10 text-center">
            <span className="text-4xl sm:text-5xl mb-4 block">💬</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-syne)] mb-2">
              Still need help?
            </h2>
            <p className="text-white/60 text-sm sm:text-base font-[family-name:var(--font-jakarta)] mb-6">
              Our support team typically responds within 24 hours.
            </p>
            <a 
              href="mailto:support@auraapp.com" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Email Support</span>
            </a>
            <p className="text-white/40 text-xs mt-4 font-[family-name:var(--font-jakarta)]">
              support@auraapp.com
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
