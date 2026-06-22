import { useState } from 'react';
import { Tag, Share2, Code2, Video, Sparkles } from 'lucide-react';

const services = [
  {
    id: '01',
    label: 'CONTENT',
    icon: Tag,
    title: 'Content Creation',
    desc: 'Crafting compelling brand narratives, high-quality visuals, and scroll-stopping content that resonates with Gen Z audiences and drives organic growth.',
  },
  {
    id: '02',
    label: 'SOCIAL',
    icon: Share2,
    title: 'Social Media Marketing',
    desc: 'Data-driven social strategies across Instagram, TikTok, LinkedIn & X that build authentic communities and convert followers into loyal customers.',
  },
  {
    id: '03',
    label: 'WEB',
    icon: Code2,
    title: 'Web Development',
    desc: 'Lightning-fast, responsive websites and web applications built with modern frameworks — optimized for performance, SEO, and conversion.',
  },
  {
    id: '04',
    label: 'EDITING',
    icon: Video,
    title: 'Editing',
    desc: 'Professional video editing, motion graphics, and post-production that transform raw footage into cinematic brand stories commanding attention.',
  },
  {
    id: '05',
    label: 'AI',
    icon: Sparkles,
    title: 'Ai Automation For your Business',
    desc: 'Utilize the power of AI to automate your business processes, save time, and improve efficiency.',
  },
];

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section id="services" className="section">
      <h2 className="heading-lg">
        <span style={{ color: 'var(--fg)' }}>Engineered for </span>
        <span className="text-gradient-uv">Impact.</span>
      </h2>

      <p
        className="text-sm max-w-lg mt-4 leading-relaxed"
        style={{ color: 'var(--fg-muted)' }}
      >
        Five pillars of digital excellence — each service meticulously engineered
        to deliver measurable results and transform your brand's digital presence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isActive = activeCard === index;

          return (
            <div
              key={service.id}
              className="card card--service cursor-pointer"
              style={{
                borderColor: isActive ? 'var(--border-strong)' : undefined,
                boxShadow: isActive ? 'var(--shadow-soft), var(--shadow-glow-uv)' : undefined,
                transform: isActive ? 'translateY(-4px)' : undefined,
              }}
              onMouseEnter={() => setActiveCard(index)}
            >
              <div className="flex justify-between items-center mb-5">
                <span
                  className="text-[10px] tracking-[0.15em] uppercase"
                  style={{ color: 'var(--fg-subtle)' }}
                >
                  {service.id} · {service.label}
                </span>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: 'var(--accent-uv)' }}
                />
              </div>

              <div className="service-icon mb-4">
                <Icon size={24} />
              </div>

              <h3
                className="heading-md mb-3"
                style={{ fontSize: '1.125rem', color: 'var(--fg)' }}
              >
                {service.title}
              </h3>

              <p
                className="text-xs leading-relaxed"
                style={{ color: 'var(--fg-subtle)' }}
              >
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
