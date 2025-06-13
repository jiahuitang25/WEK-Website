import Link from 'next/link';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={`flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors ${className}`}>
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12">
        <defs>
          <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(-45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="hsl(var(--accent))" strokeWidth="1.5"/>
          </pattern>
        </defs>
        <polygon points="50,50 90,25 90,75 50,95" fill="url(#diagonalHatch)" />
        <polygon points="50,50 90,25 90,75 50,95" stroke="hsl(var(--accent))" strokeWidth="3" fill="none" />
        <polygon points="50,50 10,25 10,75 50,95" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="3" />
        <polygon points="50,5 10,25 50,50 90,25" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="3" />
        <text x="50" y="28" fontFamily="Inter, Noto Sans SC, sans-serif" fontSize="16" fontWeight="bold" fill="hsl(var(--foreground))" textAnchor="middle" dominantBaseline="middle">WEK</text>
        <text x="30" y="42" fontFamily="Inter, Noto Sans SC, sans-serif" fontSize="14" fontWeight="bold" fill="hsl(var(--foreground))" textAnchor="middle" dominantBaseline="middle">筑简</text>
        <text x="30" y="62" fontFamily="Inter, Noto Sans SC, sans-serif" fontSize="14" fontWeight="bold" fill="hsl(var(--foreground))" textAnchor="middle" dominantBaseline="middle">大师</text>
      </svg>
      <span className="font-headline text-xl md:text-2xl font-bold">WEK ENT. 简筑大师</span>
    </Link>
  );
};

export default Logo;
