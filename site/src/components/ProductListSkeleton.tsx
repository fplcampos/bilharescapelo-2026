import { Skeleton } from "../app/components/ui/skeleton";

/**
 * Skeleton de loading para a listagem de produtos da CategoryPage.
 * Imita a estrutura visual do grid de produtos (hero + grid de cards).
 */
export default function ProductListSkeleton() {
  return (
    <>
      {/* Hero skeleton */}
      <div className="h-72 md:h-96 bg-secondary animate-pulse" />

      {/* Category nav strip skeleton */}
      <div className="bg-secondary border-b border-border sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 py-2 flex gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-24 shrink-0" />
          ))}
        </div>
      </div>

      {/* Products grid skeleton */}
      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section title */}
          <div className="flex items-center gap-3 mb-8">
            <Skeleton className="h-px w-8" />
            <Skeleton className="h-6 w-48" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-card border border-border overflow-hidden"
                style={{ borderRadius: "4px" }}
              >
                {/* Image area */}
                <Skeleton className="h-56 w-full rounded-none" />

                {/* Content area */}
                <div className="p-6 space-y-3">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-5 w-4/5" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />

                  {/* Price + CTA row */}
                  <div className="flex items-end justify-between border-t border-border pt-4">
                    <div className="space-y-1.5">
                      <Skeleton className="h-3 w-16" />
                      <Skeleton className="h-7 w-24" />
                    </div>
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
