"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Projects', href: '#projects' },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.href.substring(1)));
      const scrollPosition = window.scrollY + window.innerHeight / 2.5; // Adjusted offset for better accuracy

      let currentSection = '';
      for (const section of sections) {
        if (section) {
          if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            currentSection = section.id;
            break;
          }
        }
      }
      // If no section is active (e.g., at the top or bottom of the page), clear the active state
      if (!currentSection && sections.length > 0) {
        const firstSection = sections[0];
        const lastSection = sections[sections.length - 1];
        if (firstSection && window.scrollY < firstSection.offsetTop) {
            // If above the first section, nothing is active
            currentSection = '';
        }
      }


      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card">
      <div className="container mx-auto flex h-20 items-center justify-between px-8 md:px-12">
        <Logo />
        <div className="flex items-center space-x-4">
          <nav className="hidden items-center space-x-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
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
        {/* Mobile Nav Trigger (optional, can be added later) */}
        {/* <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button> */}
      </div>
    </header>
  );
};

export default Header;
