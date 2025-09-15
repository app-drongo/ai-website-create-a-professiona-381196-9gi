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
  // ACTION_PLACEHOLDER_END

  // ACTION_PLACEHOLDER_START
  const handleFilter = () => {
    router.push('/practice-areas');
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="bg-background border">
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
                Personal Injury Legal Services
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore our comprehensive personal injury practice with 12 specialized case types.
                From motor vehicle accidents to medical malpractice, our experienced attorneys fight
                for maximum compensation.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2" onClick={handleFilter}>
                <Filter className="size-4" />
                Filter Cases
              </Button>
              <Button className="gap-2" onClick={handleSearch}>
                <Search className="size-4" />
                Find Attorney
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">12</span> Case Types Available
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">$2M+</span> Average settlements
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">98%</span> Success rate
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Free</span> Initial consultation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
