import Link from 'next/link';
import Image from 'next/image';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={`flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors ${className}`}>
      <Image
        src="/logo.png" // Make sure to save your logo as 'logo.png' in the 'public' folder
        alt="WEK ENT. 简筑大师 Logo"
        width={356} // Original width of your provided image
        height={352} // Original height of your provided image
        className="h-10 w-10 md:h-12 md:w-12"
        data-ai-hint="company logo"
      />
      <span className="font-headline text-xl md:text-2xl font-bold">WEK ENT. 简筑大师</span>
    </Link>
  );
};

export default Logo;
