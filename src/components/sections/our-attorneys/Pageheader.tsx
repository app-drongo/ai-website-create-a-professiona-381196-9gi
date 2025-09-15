'use client';
import { useRouter } from 'next/navigation';
import { ChevronRight, Home, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Pageheader() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleSearch = () => {
    router.push('/case-studies');
  };

  const handleFilters = () => {
    router.push('/practice-areas');
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link
              href="/"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Home className="size-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="size-4" />
            <Link href="/practice-areas" className="hover:text-foreground transition-colors">
              Practice Areas
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">Personal Injury Cases</span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Personal Injury Legal Representation
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore 12 successful personal injury cases handled by Sterling & Associates. From
                motor vehicle accidents to workplace injuries, see how we fight for maximum
                compensation.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2" onClick={handleFilters}>
                <Filter className="size-4" />
                Filter Cases
              </Button>
              <Button className="gap-2" onClick={handleSearch}>
                <Search className="size-4" />
                Search Cases
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">12</span> Active Cases
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">$2.5M+</span> Total Recovered
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">98%</span> Success Rate
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Free</span> Initial Consultation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
