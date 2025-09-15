'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
  Building2,
  Scale,
  FileText,
  Briefcase,
  Users,
  Shield,
  TrendingUp,
  Gavel,
  BookOpen,
} from 'lucide-react';

export default function Features() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/consultation');
  };
  const handleSecondaryAction = () => {
    router.push('/attorneys');
  };
  // ACTION_PLACEHOLDER_END

  const practiceAreas = [
    {
      icon: Building2,
      title: 'Corporate Law',
      description:
        'Comprehensive corporate governance, compliance, and business formation services for enterprises of all sizes.',
      badge: 'Core Practice',
      stats: '500+ Corporations Served',
    },
    {
      icon: TrendingUp,
      title: 'Mergers & Acquisitions',
      description:
        'Strategic M&A advisory, due diligence, and transaction structuring with $2.8B in completed deals.',
      badge: 'Specialty',
      stats: '$2.8B in Transactions',
    },
    {
      icon: Shield,
      title: 'Intellectual Property',
      description:
        'Patent prosecution, trademark registration, and IP portfolio management for innovative companies.',
      badge: 'Innovation',
      stats: '1,200+ Patents Filed',
    },
    {
      icon: FileText,
      title: 'Securities & Finance',
      description:
        'Capital markets transactions, regulatory compliance, and private equity structuring.',
      badge: 'Finance',
      stats: '200+ Offerings Completed',
    },
    {
      icon: Users,
      title: 'Employment Law',
      description:
        'Executive compensation, employment agreements, and workplace compliance strategies.',
      badge: 'HR Solutions',
      stats: '95% Success Rate',
    },
    {
      icon: Briefcase,
      title: 'Commercial Litigation',
      description:
        'Complex business disputes, contract enforcement, and alternative dispute resolution.',
      badge: 'Litigation',
      stats: '$150M+ Recovered',
    },
    {
      icon: Scale,
      title: 'Regulatory Compliance',
      description:
        'Industry-specific regulatory guidance, government investigations, and compliance programs.',
      badge: 'Compliance',
      stats: 'Zero Violations Record',
    },
    {
      icon: Gavel,
      title: 'Real Estate Law',
      description:
        'Commercial real estate transactions, zoning, and property development legal services.',
      badge: 'Real Estate',
      stats: '$500M+ in Deals',
    },
    {
      icon: BookOpen,
      title: 'Tax & Estate Planning',
      description:
        'Corporate tax strategy, estate planning, and wealth preservation for high-net-worth clients.',
      badge: 'Planning',
      stats: '30% Average Tax Savings',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            Practice Areas
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Legal Solutions for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sterling & Associates delivers strategic legal counsel across all aspects of corporate
            law, helping businesses navigate complex challenges and achieve sustainable growth.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-secondary/50">
                      {area.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {area.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {area.description}
                  </CardDescription>
                  <div className="pt-2 border-t border-border/30">
                    <p className="text-sm font-medium text-primary">{area.stats}</p>
                  </div>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Discuss Your Legal Needs?</h3>
            <p className="text-muted-foreground mb-6">
              Our experienced attorneys are standing by to provide strategic counsel tailored to
              your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handlePrimaryAction}
                className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Free Consultation
              </Button>
              <Button
                onClick={handleSecondaryAction}
                variant="outline"
                className="px-8 py-3 border-border hover:bg-accent"
              >
                Meet Our Attorneys
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
