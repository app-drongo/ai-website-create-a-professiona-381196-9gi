'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Scale,
  Award,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleNewsletterSignup = () => {
    router.push('/consultation');
  };
  // ACTION_PLACEHOLDER_END

  const footerSections = [
    {
      title: 'Practice Areas',
      links: [
        { name: 'Corporate Law', href: '/practice-areas' },
        { name: 'Mergers & Acquisitions', href: '/practice-areas' },
        { name: 'Intellectual Property', href: '/practice-areas' },
        { name: 'Securities Law', href: '/practice-areas' },
        { name: 'Employment Law', href: '/practice-areas' },
        { name: 'Contract Negotiation', href: '/practice-areas' },
      ],
    },
    {
      title: 'Firm',
      links: [
        { name: 'Our Attorneys', href: '/attorneys' },
        { name: 'About Sterling & Associates', href: '/' },
        { name: 'Awards & Recognition', href: '/' },
        { name: 'Pro Bono Work', href: '/' },
        { name: 'Careers', href: '/' },
        { name: 'Office Locations', href: '/' },
      ],
    },
    {
      title: 'Client Resources',
      links: [
        { name: 'Legal Resources', href: '/resources' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Industry Insights', href: '/resources' },
        { name: 'Legal Updates', href: '/resources' },
        { name: 'Client Portal', href: '/' },
        { name: 'Document Center', href: '/resources' },
      ],
    },
    {
      title: 'Legal Information',
      links: [
        { name: 'Attorney Advertising', href: '/' },
        { name: 'Privacy Policy', href: '/' },
        { name: 'Terms of Service', href: '/' },
        { name: 'Client Confidentiality', href: '/' },
        { name: 'Professional Standards', href: '/' },
        { name: 'Bar Admissions', href: '/' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/sterling-associates' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/sterlinglaw' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/sterlingassociates' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Firm Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Scale className="size-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">Sterling & Associates</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Providing exceptional legal counsel to corporations and businesses for over 30
                years. Trusted by Fortune 500 companies and emerging enterprises nationwide.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@sterlinglaw.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (212) 555-0147</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  1250 Broadway, Suite 3200, New York, NY 10001
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Legal Updates & Insights</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3" onClick={handleNewsletterSignup}>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Receive quarterly legal updates and industry insights. Unsubscribe anytime.
              </p>
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Award className="size-4 text-primary" />
                <span className="text-xs text-muted-foreground">AV Preeminent Rated</span>
              </div>
              <div className="text-xs text-muted-foreground">Super Lawyers</div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Sterling & Associates Law Firm. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">
                Attorney Advertising. Prior results do not guarantee a similar outcome.
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Site Map
            </Link>
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility Statement
            </Link>
            <Link
              href="/consultation"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Emergency Legal Services
            </Link>
          </div>

          {/* Bar Admissions */}
          <div className="mt-4 pt-4 border-t border-border/30">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              Licensed to practice in New York, New Jersey, Connecticut, and California. Admitted to
              practice before the U.S. Supreme Court and various federal courts.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
