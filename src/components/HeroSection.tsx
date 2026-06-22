import { ArrowRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-10 sm:py-16 lg:py-24 pt-28 sm:pt-32 lg:pt-36 relative overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/bg-img2.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Overlay Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: isDark 
            ? 'linear-gradient(to right, rgba(5, 8, 22, 0.85), rgba(5, 8, 22, 0.7))'
            : 'linear-gradient(to right, rgba(249, 250, 251, 0.88), rgba(249, 250, 251, 0.75))',
          transition: 'background-image 0.3s ease-in-out',
        }}
      />
      {/* Content Layer */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p
            className="text-base font-semibold tracking-wider uppercase"
            style={{ color: isDark ? '#7C3AED' : '#6D28D9' }}
          >
            A hub for innovative minds
          </p>

          <h1
            className="mt-4 text-4xl font-bold lg:mt-8 sm:text-6xl xl:text-8xl"
            style={{
              fontFamily: 'var(--font-heading)',
              color: isDark ? '#F9FAFB' : '#020617',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            <span className="whitespace-nowrap">Generation&nbsp;Z</span>
            <br />
            <span className="text-gradient-hero">Unlimited Value.</span>
          </h1>

          <p
            className="mt-4 text-base lg:mt-8 sm:text-xl leading-relaxed max-w-xl"
            style={{ color: isDark ? '#D1D5DB' : '#4B5563' }}
          >
            Accelerate your growth with expert insights and cutting-edge tools.
            We are a youth-powered agency engineering premium brand experiences,
            high-conversion websites, and data-driven social campaigns.
          </p>

          <a
            href="#contact"
            className="btn btn-primary inline-flex items-center mt-8 lg:mt-16"
          >
            Join for free
            <ArrowRight className="w-5 h-5 ml-3" />
          </a>

          <p className="mt-5 text-sm" style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}>
            Already know us?{' '}
            <a
              href="#portfolio"
              className="font-medium transition-colors duration-200"
              style={{ color: isDark ? '#F9FAFB' : '#020617' }}
            >
              View our work
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
