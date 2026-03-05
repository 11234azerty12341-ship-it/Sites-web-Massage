/*
 * Logique: Skeleton loading global pour améliorer le CLS
 * Structure: div conteneur avec animations skeleton
 */
export default function Loading() {
  return (
    <div className="min-h-screen bg-cream-50 animate-pulse">
      {/* Hero skeleton */}
      <section className="pt-24 pb-16">
        <div className="container-custom">
          <div className="h-12 bg-cream-200 rounded-lg w-1/3 mx-auto mb-8" />
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 aspect-[4/5] bg-cream-200 rounded-2xl" />
            <div className="w-full md:w-1/2 space-y-4">
              <div className="h-8 bg-cream-200 rounded w-3/4" />
              <div className="h-4 bg-cream-200 rounded w-full" />
              <div className="h-4 bg-cream-200 rounded w-5/6" />
              <div className="h-12 bg-cream-200 rounded w-48 mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Services skeleton */}
      <section className="py-20 bg-cream-100">
        <div className="container-custom">
          <div className="h-10 bg-cream-200 rounded w-48 mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <div key={i} className="bg-cream-50 rounded-2xl p-8 h-64" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
