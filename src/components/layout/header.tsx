"use client";

import Link from 'next/link';
import Logo from '@/components/logo';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Contact Us', href: '#contact' },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const href = item.href;
        // For internal links, we need to handle the '#'
        if (href.startsWith('#')) {
          return document.getElementById(href.substring(1));
        }
        return null;
      }).filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + window.innerHeight / 2.5;

      let currentSection = '';
      for (const section of sections) {
        if (section) {
          // Adjust the offset check for the footer which might not have a large height
          const isFooter = section.tagName.toLowerCase() === 'footer';
          const sectionTop = section.offsetTop;
          const sectionBottom = section.offsetTop + section.offsetHeight;

          if (isFooter) {
            // Check if the bottom of the viewport is at or past the footer's top
            if (window.scrollY + window.innerHeight >= sectionTop) {
              currentSection = section.id;
            }
          } else {
             if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              currentSection = section.id;
              break;
            }
          }
        }
      }
      
      // If after checking all sections, we are not in the footer, but the scroll is at the very bottom, keep footer active
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
         const contactSection = document.getElementById('contact');
         if(contactSection) currentSection = 'contact';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card">
      <div className="container mx-auto flex h-20 items-center justify-between px-8 md:px-12">
        <Logo />
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-md px-4 py-2 text-base font-medium transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'bg-foreground text-primary-foreground'
                    : 'text-foreground/80 hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
