import Link from 'next/link';
import { Building2 } from 'lucide-react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={`flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors ${className}`}>
      <Building2 className="h-8 w-8" />
      <span className="font-headline text-2xl font-bold">WEK Build</span>
    </Link>
  );
};

export default Logo;
