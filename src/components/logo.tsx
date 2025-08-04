import Link from 'next/link';
import Image from 'next/image';

const Logo = ({ className }: { className?: string }) => {
  const repositoryName = 'WEK-Website';
  const logoPath = process.env.NODE_ENV === 'production' ? `/${repositoryName}/logo.png` : '/logo.png';

  return (
    <Link href="/" className={`flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors ${className}`}>
      <Image
        src={logoPath}
        alt="WEK ENT. Logo"
        width={356}
        height={352}
        className="h-14 w-14 md:h-16 md:w-16 border-0"
        data-ai-hint="company logo"
        priority
      />
      <span className="font-headline text-xl md:text-2xl font-bold">WEK ENT.</span>
    </Link>
  );
};

export default Logo;
