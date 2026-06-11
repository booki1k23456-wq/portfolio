import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

export function HeroSection() {
  const navLinks = ['About', 'Price', 'Projects', 'Contact'];

  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="px-6 md:px-10 pt-6 md:pt-8">
        <nav className="flex justify-between">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider
                text-sm md:text-lg lg:text-[1.4rem]
                hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="overflow-hidden">
        <h1
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full
            text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]
            mt-6 sm:mt-4 md:-mt-5"
        >
          Hi, i&apos;m yi xuan
        </h1>
      </FadeIn>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 mt-auto px-6 md:px-10">
        {/* Left text */}
        <FadeIn
          delay={0.35}
          y={20}
          className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
        >
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a id product creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        {/* Contact Button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10
          top-1/2 -translate-y-1/2
          sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet padding={150} strength={3}>
          <img
            src="/主视觉.png"
            alt="/主视觉.png"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain"
            loading="lazy"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}
