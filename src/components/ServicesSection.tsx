import { FadeIn } from './FadeIn';

interface ServiceItemProps {
  number: string;
  name: string;
  description: string;
}

function ServiceItem({ number, name, description }: ServiceItemProps) {
  return (
    <div
      className="flex flex-col sm:flex-row py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)]
        first:border-t"
    >
      {/* Number */}
      <span
        className="font-black text-[#0C0C0C] shrink-0"
        style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
      >
        {number}
      </span>

      {/* Name and description */}
      <div className="sm:ml-8 md:ml-12 mt-4 sm:mt-0">
        <h3
          className="font-medium uppercase text-[#0C0C0C]"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
        >
          {name}
        </h3>
        <p
          className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl mt-2"
          style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

const services: ServiceItemProps[] = [
  {
    number: '01',
    name: '3D Modeling',
    description: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    name: 'Rendering',
    description: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    name: 'Motion Design',
    description: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    name: 'Branding',
    description: 'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    name: 'Web Design',
    description: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <h2
        className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      {/* Service list */}
      <div className="max-w-5xl mx-auto">
        {services.map((service, index) => (
          <FadeIn key={service.number} delay={index * 0.1}>
            <ServiceItem {...service} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
