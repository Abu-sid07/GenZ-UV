import { ArrowRight } from 'lucide-react'; 
import { useTheme } from '../hooks/useTheme'; 

export default function HeroSection() { 
  const { theme } = useTheme(); 
  const isDark = theme === 'dark'; 

  return ( 
    <section 
      className="py-10 sm:py-16 lg:py-24 pt-28 sm:pt-32 lg:pt-36" 
      style={{ 
        // SAME OVERLAY FOR BOTH THEMES ✅ 
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.72) 0%, rgba(30, 41, 59, 0.68) 100%), url(/bg-img2.jpeg)`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
      }} 
    > 
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"> 
        <div className="max-w-3xl"> 
          <p 
            className="text-base font-semibold tracking-wider uppercase" 
            style={{ color: isDark ? '#A78BFA' : '#C4B5FD' }} 
          > 
            A hub for innovative minds 
          </p> 

          <h1 
            className="mt-4 text-4xl font-bold lg:mt-8 sm:text-6xl xl:text-8xl" 
            style={{ 
              fontFamily: 'var(--font-heading)', 
              color: isDark ? '#F9FAFB' : '#F3F4F6', 
              lineHeight: 1.05, 
              letterSpacing: '-0.02em', 
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)', 
            }} 
          > 
            <span className="whitespace-nowrap">Generation&nbsp;Z</span> 
            <br /> 
            <span className="text-gradient-hero">Unlimited Value.</span> 
          </h1> 

          <p 
            className="mt-4 text-base lg:mt-8 sm:text-xl leading-relaxed max-w-xl" 
            style={{ 
              color: isDark ? '#E5E7EB' : '#F3F4F6', 
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)', 
            }} 
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

          <p 
            className="mt-5 text-sm" 
            style={{ 
              color: isDark ? '#D1D5DB' : '#E5E7EB', 
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)', 
            }} 
          > 
            Already know us?{' '} 
            <a
              href="#portfolio" 
              className="font-medium transition-colors duration-200" 
              style={{ color: isDark ? '#FBBF24' : '#FCD34D' }} 
            > 
              View our work 
            </a> 
          </p> 
        </div> 
      </div> 
    </section> 
  ); 
}
