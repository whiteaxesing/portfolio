import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import CompaniesSection from '@/components/sections/CompaniesSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Personal portfolio of a full-stack developer specialized in React, Next.js and modern technologies.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechnologiesSection />
      <CompaniesSection />
      <CTASection />
    </>
  );
}