"use client";

import Link from 'next/link';
import Logo from '@/components/logo';
import { Mail, MapPin, Phone, Facebook, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <Logo className="mb-4 text-primary" />
            <p className="text-sm text-muted-foreground">
              Building dreams into reality with quality and precision.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" />
                <div>
                  <span>Taman Bukit Mas, Taiping, Malaysia</span>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Taman+Bukit+Mas,+Taiping,+Malaysia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-800 transition-colors mt-1"
                  >
                    <span>Open in maps</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>014-945 8023</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>gynous@live.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Facebook className="h-4 w-4 text-primary" />
                <a 
                  href="https://www.facebook.com/profile.php?id=100063638340671&mibextid=wwXIfr&rdid=0Nbut7LRK73tLFDl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors text-muted-foreground"
                >
                  W E K ENT.
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear !== null ? currentYear : '...'} WEK ENT. 简筑大师. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
