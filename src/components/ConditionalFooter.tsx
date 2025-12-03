'use client';
import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();

  // Don't show footer on pages with CTASection (which includes footer)
  // CTASection is used in: home, about-me, resume, blog pages
  // Also don't show on contact page (it has its own integrated footer)
  const pagesWithIntegratedFooter = ['/', '/about-me', '/resume', '/contact'];

  if (pagesWithIntegratedFooter.includes(pathname) || pathname?.startsWith('/blog')) {
    return null;
  }

  return <Footer />;
}
