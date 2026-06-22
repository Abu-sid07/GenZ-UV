import { Check } from 'lucide-react';

const checkItems = [
  'Analytics-driven campaigns & targeted outreach with proven metrics',
  'Sleek, responsive, user-friendly web experiences built on modern frameworks',
  'Professional video & photo editing that commands instant visual impact',
  'Full suite of digital marketing — advanced SEO, immersive branding, targeted campaigns',
];

const TEAM_IMAGE = 'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200';

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <h2 className="heading-lg mb-10">
        <span style={{ color: 'var(--fg)' }}>Why choose </span>
        <span className="text-gradient-uv">GenZ UV</span>
        <span style={{ color: 'var(--fg)' }}>?</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-start">
        {/* Left */}
        <div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--fg-muted)' }}>
            GenZ UV isn't just another agency — we're a collective of young
            digital natives who breathe innovation. Born from a passion for
            cutting-edge technology and data-driven strategy, we engineer digital
            experiences that don't just look beautiful — they perform.
          </p>
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--fg-muted)' }}>
            Our approach combines relentless creativity with meticulous
            analytics, ensuring every pixel, every campaign, and every line of
            code delivers measurable ROI. We don't follow trends — we set them.
          </p>

          <div className="space-y-3">
            {checkItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid var(--accent-success)',
                  }}
                >
                  <Check size={11} style={{ color: 'var(--accent-success)' }} />
                </span>
                <span className="text-sm" style={{ color: 'var(--fg-muted)' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="#contact" className="btn btn-primary">
              Let's Build the Future Together →
            </a>
            <a href="#crew" className="btn btn-secondary">
              Meet the Crew
            </a>
          </div>
        </div>

        {/* Right */}
        <div>
          <div className="card rounded-2xl overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img
                src={TEAM_IMAGE}
                alt="Team collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, var(--bg-elevated) 0%, transparent 100%)',
                }}
              />
            </div>
            <div
              className="px-4 py-3 flex justify-between items-center"
              style={{ borderTop: '1px solid var(--border-subtle)' }}
            >
              <span className="badge badge--success text-[9px] py-1 px-2">
                <span className="badge__dot" style={{ width: '5px', height: '5px' }} />
                ACTIVE COLLABORATION
              </span>
              <span className="text-[10px] tracking-wider" style={{ color: 'var(--fg-subtle)' }}>
                HEADQUARTERS
              </span>
            </div>
          </div>

          <div className="card rounded-2xl p-5 mt-4">
            <p className="label-sm mb-3">OUR CONVICTION</p>
            <p
              className="text-base leading-snug"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--fg)' }}
            >
              "We don't just build brands — we engineer legacies that transcend
              the digital landscape."
            </p>
            <p className="text-xs mt-2" style={{ color: 'var(--fg-muted)' }}>
              Every project begins with a deep understanding of your vision and
              ends with results that exceed expectations.
            </p>
            <span
              className="inline-flex items-center gap-1.5 text-[10px] tracking-wider uppercase rounded-full px-3 py-1.5 mt-4 font-bold"
              style={{ background: 'var(--accent-uv)', color: '#F9FAFB' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#F9FAFB' }} />
              UNLIMITED VALUE — THE DEFINITIVE PROMISE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
