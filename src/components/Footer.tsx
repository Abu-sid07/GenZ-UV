const WHATSAPP_URL = 'https://web.whatsapp.com/send?phone=919566180862&text=Hi%20GenZ%20UV!';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Meet the Crew', href: '#crew' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 — Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-1.5">
              <span className="navbar__logo-text">GenZ</span>
              <span className="navbar__logo-text navbar__logo-accent">UV</span>
            </a>
            <p
              className="text-sm max-w-xs mt-3 leading-relaxed"
              style={{ color: 'var(--fg-subtle)' }}
            >
              A youth-powered digital agency engineering premium brand experiences,
              high-conversion websites, and data-driven social campaigns.
            </p>
            <div className="badge badge--success mt-5 text-[9px] py-1 px-2">
              <span className="badge__dot" style={{ width: '5px', height: '5px' }} />
              ALL SYSTEMS OPERATIONAL
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <p className="label-sm mb-4">NAVIGATION</p>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="footer__link block mb-2.5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Column 3 — Secure Channel */}
          <div>
            <p className="label-sm mb-4">SECURE CHANNEL</p>
            <p
              className="text-[10px] uppercase tracking-wider"
              style={{ color: 'var(--fg-subtle)' }}
            >
              FOUNDER DIRECT LINE
            </p>
            <p
              className="font-bold text-lg mt-1"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-uv)',
              }}
            >
              +91 95661 80862
            </p>

            <p
              className="text-[10px] uppercase tracking-wider mt-4"
              style={{ color: 'var(--fg-subtle)' }}
            >
              INSTANT CHAT
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm mt-1 transition-colors duration-200"
              style={{ color: 'var(--accent-success)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Me
            </a>
          </div>
        </div>

        {/* Divider with glow */}
        <div className="divider-glow mt-10" />

        {/* Bottom bar */}
        <div className="footer__bottom flex justify-between items-center flex-wrap gap-2">
          <p>© 2025 GenZ UV. All rights reserved. Unlimited Value.</p>
          <p>Engineered with ⚡ by GenZ UV Collective</p>
        </div>
      </div>
    </footer>
  );
}
