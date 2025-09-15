'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import {
  Scale,
  Shield,
  Building2,
  FileText,
  Users,
  Award,
  Briefcase,
  Clock,
  CheckCircle,
} from 'lucide-react';

export default function Features() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/consultation');
  };
  const handleSecondaryAction = () => {
    router.push('/practice-areas');
  };
  // ACTION_PLACEHOLDER_END

  const features = [
    {
      icon: Scale,
      title: 'Corporate Law Excellence',
      description:
        'Comprehensive corporate legal services including governance, compliance, and regulatory matters with 25+ years of expertise.',
      badge: 'Corporate',
    },
    {
      icon: Building2,
      title: 'Mergers & Acquisitions',
      description:
        'Strategic M&A guidance with $2.8B in completed transactions, ensuring seamless deal execution and maximum value.',
      badge: 'M&A',
    },
    {
      icon: Shield,
      title: 'Intellectual Property Protection',
      description:
        'Safeguard your innovations with patent filing, trademark registration, and IP litigation defense services.',
      badge: 'IP Law',
    },
    {
      icon: FileText,
      title: 'Contract Negotiation',
      description:
        'Expert contract drafting and negotiation services protecting your business interests in every agreement.',
      badge: 'Contracts',
    },
    {
      icon: Users,
      title: 'Employment Law Compliance',
      description:
        'Navigate complex employment regulations, workplace policies, and executive compensation structures.',
      badge: 'Employment',
    },
    {
      icon: Award,
      title: 'Securities & Finance',
      description:
        'Capital raising, SEC compliance, and securities law expertise for public and private companies.',
      badge: 'Securities',
    },
    {
      icon: Briefcase,
      title: 'Business Formation',
      description:
        'Strategic entity selection and formation services for startups, partnerships, and corporate restructuring.',
      badge: 'Formation',
    },
    {
      icon: Clock,
      title: '24/7 Legal Support',
      description:
        'Round-the-clock access to senior attorneys for urgent legal matters and time-sensitive transactions.',
      badge: 'Support',
    },
    {
      icon: CheckCircle,
      title: 'Regulatory Compliance',
      description:
        'Stay compliant with evolving regulations across industries including healthcare, finance, and technology.',
      badge: 'Compliance',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Legal Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Legal Solutions for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sterling & Associates delivers strategic legal counsel with proven results across
            corporate law, M&A transactions, and intellectual property protection.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
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
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to protect and grow your business with expert legal counsel?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePrimaryAction}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Free Consultation
            </button>
            <button
              onClick={handleSecondaryAction}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Practice Areas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
