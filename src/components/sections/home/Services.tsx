'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Scale,
  Building2,
  FileText,
  Shield,
  Briefcase,
  Users,
  BarChart3,
  Gavel,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Services() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/consultation');
  };
  const handleSecondaryAction = () => {
    router.push('/practice-areas');
  };
  const handleCustomConsultation = () => {
    router.push('/consultation');
  };
  // ACTION_PLACEHOLDER_END

  const services = [
    {
      id: 'corporate-law',
      title: 'Corporate Law & Governance',
      description: 'Comprehensive legal guidance for business operations and compliance',
      longDescription:
        'Our corporate law practice provides strategic counsel on entity formation, corporate governance, securities compliance, and regulatory matters. We help businesses navigate complex legal frameworks while maintaining operational efficiency.',
      icon: Building2,
      benefits: [
        'Entity formation and restructuring',
        'Board governance and fiduciary duties',
        'Securities law compliance',
        'Regulatory compliance programs',
      ],
      pricing: 'Retainer arrangements available',
      timeline: 'Ongoing counsel relationship',
      featured: true,
      badge: 'Core Practice',
    },
    {
      id: 'mergers-acquisitions',
      title: 'Mergers & Acquisitions',
      description: 'Expert transaction counsel for strategic business combinations',
      longDescription:
        'Sterling & Associates guides clients through complex M&A transactions, from initial due diligence through closing and post-merger integration. Our team has facilitated over $2.5 billion in successful transactions.',
      icon: BarChart3,
      benefits: [
        'Due diligence coordination',
        'Transaction structuring and negotiation',
        'Regulatory approval processes',
        'Post-closing integration support',
      ],
      pricing: 'Transaction-based fee structure',
      timeline: '3-9 months typical transaction',
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Protection',
      description: 'Safeguard your innovations and competitive advantages',
      longDescription:
        'Our IP practice protects your most valuable assets through strategic patent prosecution, trademark registration, licensing agreements, and enforcement actions. We secure and defend intellectual property across all industries.',
      icon: Shield,
      benefits: [
        'Patent prosecution and portfolio management',
        'Trademark registration and enforcement',
        'Licensing and technology transfer',
        'IP litigation and dispute resolution',
      ],
      pricing: 'Flat fees for filings, hourly for complex matters',
      timeline: '6-18 months for patent prosecution',
    },
    {
      id: 'employment-law',
      title: 'Employment Law & HR Compliance',
      description: 'Comprehensive workforce legal solutions and risk management',
      longDescription:
        'Navigate the complex landscape of employment law with confidence. We provide proactive counsel on hiring practices, workplace policies, compliance issues, and dispute resolution to protect your organization.',
      icon: Users,
      benefits: [
        'Employment contract drafting',
        'Workplace policy development',
        'Discrimination and harassment defense',
        'Executive compensation planning',
      ],
      pricing: 'Monthly retainer or project-based',
      timeline: 'Immediate response for urgent matters',
      badge: 'Risk Management',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Legal Excellence
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Legal Solutions
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              For Modern Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sterling & Associates delivers strategic legal counsel across corporate law, M&A
            transactions, and intellectual property protection with over 25 years of proven
            expertise
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={service.id}>
                <div
                  className={`
                  group relative overflow-hidden rounded-2xl
                  ${
                    service.featured
                      ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8'
                      : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}
                >
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${
                          service.featured
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/10 text-primary'
                        }
                      `}
                      >
                        <Icon className="size-7" />
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">{service.title}</h3>
                        {service.badge && (
                          <Badge variant={service.featured ? 'default' : 'secondary'}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">{service.description}</p>

                      {service.longDescription && (
                        <p className="text-muted-foreground">{service.longDescription}</p>
                      )}

                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Fee Structure:</span>
                            <span className="text-sm font-semibold">{service.pricing}</span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Typical Timeline:</span>
                            <span className="text-sm font-semibold">{service.timeline}</span>
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button
                          variant={service.featured ? 'default' : 'outline'}
                          className="group/btn"
                          onClick={handlePrimaryAction}
                        >
                          Free Consultation
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator between items */}
                {index < services.length - 1 && <Separator className="my-8" />}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <div className="flex justify-center mb-4">
            <Gavel className="size-8 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Complex Legal Matter?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our experienced attorneys provide tailored solutions for unique business challenges.
            Schedule a confidential consultation to discuss your specific legal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleCustomConsultation}>
              Schedule Consultation
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={handleSecondaryAction}>
              Practice Areas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
