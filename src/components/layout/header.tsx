import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

const navItems = [
  { label: 'About', href: '#about-us' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact Us', href: '#contact' },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card">
      <div className="container mx-auto flex h-20 items-center justify-between px-8 md:px-12">
        <Logo />
        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="default" size="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="#contact">Get in Touch</Link>
        </Button>
        {/* Mobile Nav Trigger (optional, can be added later) */}
        {/* <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button> */}
      </div>
    </header>
  );
};

export default Header;
