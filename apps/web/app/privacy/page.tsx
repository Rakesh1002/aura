import { BackgroundEffects, PageHeader } from "../components/background";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

export default function PrivacyPage() {
  return (
    <>
      <BackgroundEffects />
      <Navigation />
      
      <PageHeader 
        title="Privacy Policy"
        subtitle="Last updated: November 27, 2025"
      />
      
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 sm:p-8 md:p-10 space-y-10">
            
            {/* Introduction */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)] text-pop-pink mb-4">
                1. Introduction
              </h2>
              <div className="space-y-4 text-white/70 font-[family-name:var(--font-jakarta)] text-sm sm:text-base leading-relaxed">
                <p>
                  Aura (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the &quot;Service&quot;).
                </p>
                <p>
                  By using Aura, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our Service.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)] text-pop-blue mb-4">
                2. Information We Collect
              </h2>
              <div className="space-y-4 text-white/70 font-[family-name:var(--font-jakarta)] text-sm sm:text-base leading-relaxed">
                <p><strong className="text-white">2.1 Personal Information You Provide</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account Information:</strong> Email address, username, and password when you create an account.</li>
                  <li><strong>Photos:</strong> Images you upload to create your Identity Vault. These are used solely to generate AI images that maintain your likeness.</li>
                  <li><strong>Payment Information:</strong> Processed securely through Apple App Store or Google Play. We do not store your credit card details.</li>
                  <li><strong>Communications:</strong> Information you provide when contacting our support team.</li>
                </ul>
                
                <p><strong className="text-white">2.2 Automatically Collected Information</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers.</li>
                  <li><strong>Usage Data:</strong> Features used, time spent in app, crash reports, and performance data.</li>
                  <li><strong>Analytics:</strong> Anonymized data about app usage patterns to improve our Service.</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)] text-pop-purple mb-4">
                3. How We Use Your Information
              </h2>
              <div className="space-y-4 text-white/70 font-[family-name:var(--font-jakarta)] text-sm sm:text-base leading-relaxed">
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our Service</li>
                  <li>Generate AI images based on your Identity Vault</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and support requests</li>
                  <li>Monitor and analyze usage trends to improve user experience</li>
                  <li>Detect, prevent, and address technical issues and fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Data Processing & AI */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)] text-pop-orange mb-4">
                4. AI Processing & Your Photos
              </h2>
              <div className="space-y-4 text-white/70 font-[family-name:var(--font-jakarta)] text-sm sm:text-base leading-relaxed">
                <p><strong className="text-white">4.1 On-Device Processing</strong></p>
                <p>Where possible, we use on-device AI processing to analyze your photos locally on your device. This means your photos never leave your device for initial processing.</p>
                
                <p><strong className="text-white">4.2 Cloud Processing</strong></p>
                <p>For high-resolution image generation, photos may be processed on secure cloud servers. These servers are:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Located in secure, SOC 2 compliant data centers</li>
                  <li>Encrypted using AES-256 encryption</li>
                  <li>Automatically purged after processing is complete</li>
                </ul>
                
                <p><strong className="text-white">4.3 No Training on Your Photos</strong></p>
                <p>We do NOT use your personal photos to train our AI models without explicit consent. Your Identity Vault data is used solely for generating your personalized images.</p>
              </div>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)] text-pop-lime mb-4">
                5. How We Share Your Information
              </h2>
              <div className="space-y-4 text-white/70 font-[family-name:var(--font-jakarta)] text-sm sm:text-base leading-relaxed">
                <p>We do NOT sell your personal information. We may share information in these limited circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> Third-party vendors who assist in providing our Service (hosting, analytics, payment processing), bound by confidentiality agreements.</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government request.</li>
                  <li><strong>Safety:</strong> To protect the rights, property, and safety of Aura, our users, or the public.</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with continued protection of your data.</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)] text-pop-pink mb-4">
                6. Data Security
              </h2>
              <div className="space-y-4 text-white/70 font-[family-name:var(--font-jakarta)] text-sm sm:text-base leading-relaxed">
                <p>We implement industry-standard security measures including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Encryption:</strong> AES-256 encryption for data at rest; TLS 1.3 for data in transit</li>
                  <li><strong>Access Controls:</strong> Strict access controls and authentication for our systems</li>
                  <li><strong>Regular Audits:</strong> Third-party security audits and penetration testing</li>
                  <li><strong>Employee Training:</strong> Regular security training for all employees</li>
                  <li><strong>Incident Response:</strong> Documented procedures for security incident response</li>
                </ul>
                <p>However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security of your data.</p>
              </div>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)] text-pop-blue mb-4">
                7. Data Retention
              </h2>
              <div className="space-y-4 text-white/70 font-[family-name:var(--font-jakarta)] text-sm sm:text-base leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Identity Vault:</strong> Retained until you delete it or your account</li>
                  <li><strong>Generated Images:</strong> Stored for 30 days unless saved to your gallery</li>
                  <li><strong>Account Data:</strong> Retained until account deletion, then purged within 30 days</li>
                  <li><strong>Analytics Data:</strong> Anonymized and retained for up to 2 years</li>
                  <li><strong>Legal Requirements:</strong> Some data may be retained longer if required by law</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)] text-pop-purple mb-4">
                8. Your Rights & Choices
              </h2>
              <div className="space-y-4 text-white/70 font-[family-name:var(--font-jakarta)] text-sm sm:text-base leading-relaxed">
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing</li>
                  <li><strong>Opt-Out:</strong> Opt out of marketing communications</li>
                </ul>
                <p>To exercise these rights, contact us at <a href="mailto:privacy@auraapp.com" className="text-pop-pink hover:underline">privacy@auraapp.com</a> or use the in-app settings.</p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)] text-pop-orange mb-4">
                9. Children&apos;s Privacy
              </h2>
              <div className="space-y-4 text-white/70 font-[family-name:var(--font-jakarta)] text-sm sm:text-base leading-relaxed">
                <p>Aura is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <a href="mailto:privacy@auraapp.com" className="text-pop-pink hover:underline">privacy@auraapp.com</a>.</p>
              </div>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)] text-pop-lime mb-4">
                10. International Data Transfers
              </h2>
              <div className="space-y-4 text-white/70 font-[family-name:var(--font-jakarta)] text-sm sm:text-base leading-relaxed">
                <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Standard Contractual Clauses approved by relevant authorities</li>
                  <li>Compliance with applicable data protection laws</li>
                  <li>Encryption of data during transfer</li>
                </ul>
              </div>
            </div>

            {/* GDPR & CCPA */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)] text-pop-pink mb-4">
                11. Regional Privacy Rights
              </h2>
              <div className="space-y-4 text-white/70 font-[family-name:var(--font-jakarta)] text-sm sm:text-base leading-relaxed">
                <p><strong className="text-white">For EU/EEA Residents (GDPR):</strong></p>
                <p>We process your data based on: (a) your consent, (b) contract performance, (c) legal obligations, or (d) legitimate interests. You have additional rights including lodging complaints with your local data protection authority.</p>
                
                <p><strong className="text-white">For California Residents (CCPA):</strong></p>
                <p>You have the right to know what personal information we collect, request deletion, and opt-out of sale (we do not sell your data). We will not discriminate against you for exercising these rights.</p>
              </div>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)] text-pop-blue mb-4">
                12. Changes to This Policy
              </h2>
              <div className="space-y-4 text-white/70 font-[family-name:var(--font-jakarta)] text-sm sm:text-base leading-relaxed">
                <p>We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. For significant changes, we will provide additional notice through the app or email.</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)] text-pop-purple mb-4">
                13. Contact Us
              </h2>
              <div className="space-y-4 text-white/70 font-[family-name:var(--font-jakarta)] text-sm sm:text-base leading-relaxed">
                <p>If you have questions about this Privacy Policy or our data practices, contact us at:</p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> <a href="mailto:privacy@auraapp.com" className="text-pop-pink hover:underline">privacy@auraapp.com</a></li>
                  <li><strong>Support:</strong> <a href="mailto:support@auraapp.com" className="text-pop-pink hover:underline">support@auraapp.com</a></li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
