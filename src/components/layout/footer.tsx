"use client";

import Link from 'next/link';
import Logo from '@/components/logo';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  const businessHoursList = [
    { day: 'Monday', hours: '9:00 AM - 5:00 PM', dayIndex: 1, open: 9, close: 17 },
    { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: '8:00 AM - 6:00 PM' },
  ];

  const [mondayStatus, setMondayStatus] = useState<string>('');

  useEffect(() => {
    const now = new Date();
    const currentDay = now.getDay(); // Sunday = 0, Monday = 1
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    const mondayInfo = businessHoursList.find(bh => bh.day === 'Monday');

    if (mondayInfo && mondayInfo.open !== undefined && mondayInfo.close !== undefined) {
      if (currentDay === mondayInfo.dayIndex) {
        const isOpen = currentHour >= mondayInfo.open && (currentHour < mondayInfo.close || (currentHour === mondayInfo.close && currentMinute === 0));
        setMondayStatus(isOpen ? 'Open now' : 'Closed now');
      }
    }
  }, []);

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo className="mb-4 text-primary" />
            <p className="text-sm text-muted-foreground">
              Building dreams into reality with quality and precision.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4 text-primary flex items-center">
              <Clock className="h-5 w-5 mr-2" /> Business Hours
            </h3>
            <ul className="space-y-2 text-sm">
              {businessHoursList.map((item) => (
                <li key={item.day} className="flex justify-between">
                  <span>{item.day}:</span>
                  <span className="text-right">
                    {item.hours}
                    {item.day === 'Monday' && mondayStatus && (
                      <span className={`ml-1 font-semibold ${mondayStatus === 'Open now' ? 'text-primary' : 'text-destructive'}`}>
                        ({mondayStatus})
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 BuildWell St, Construct City, CS 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@wekbuild.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4 text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} WEK ENT. 简筑大师. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
