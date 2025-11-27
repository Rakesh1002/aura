// Background Effects - Server Component compatible
export function BackgroundEffects() {
  return (
    <>
      <div className="gradient-bg" />
      <div className="noise" />
      <div className="grid-pattern fixed inset-0 z-0" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
    </>
  );
}

// Page Header for secondary pages
export function PageHeader({ 
  title, 
  subtitle,
  gradient = true 
}: { 
  title: string; 
  subtitle?: string;
  gradient?: boolean;
}) {
  return (
    <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-syne)] mb-4 ${gradient ? 'text-gradient' : ''}`}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg text-white/60 font-[family-name:var(--font-jakarta)]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

