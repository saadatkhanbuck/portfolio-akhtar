"use client";

export default function LeadershipImpact() {
  return (
    <section className="relative py-28  text-black dark:text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Leadership & Impact
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Driving scalable systems, mentoring engineers, and delivering
            enterprise-grade software solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-10 hover:shadow-xl transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-4">
              Scalable Architecture
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Designed and implemented enterprise-level architectures supporting
              web, mobile, and desktop platforms with optimized performance and
              maintainability.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-10 hover:shadow-xl transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-4">
              API & Backend Engineering
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Built secure and scalable RESTful APIs, optimized databases, and
              ensured seamless system integrations across multiple enterprise
              environments.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-10 hover:shadow-xl transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-4">Team Mentorship</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Mentored junior engineers, conducted technical reviews, and
              established development standards aligned with Agile
              methodologies.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-10 hover:shadow-xl transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-4">
              Product Delivery Excellence
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Collaborated with cross-functional teams to deliver high-quality
              products on schedule while maintaining strong engineering best
              practices.
            </p>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-24 text-center">
          <p className="text-xl md:text-2xl font-medium text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
            “Engineering is not just about writing code — its about building
            systems that scale, teams that grow, and products that create
            impact.”
          </p>
        </div>
      </div>
    </section>
  );
}
