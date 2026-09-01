const reviews = [
  {
    name: 'Sonal Nagarkar',
    meta: 'Local Guide · 22 reviews',
    text:
      'Great place to stay in Cherrapunji, away from the crowd. Sunrise from the balcony, stars at night, and a genuinely helpful owner. A very peaceful stay.',
  },
  {
    name: 'Sohra Taxi Service',
    meta: 'Local Guide · 12 reviews',
    text: 'Amazing place with an amazing view — hard to believe until you see it yourself.',
  },
  {
    name: 'Prateek Kashyap',
    meta: 'Local Guide · 22 reviews',
    text: 'Asked about pricing and got a quick, straightforward answer from the owner the same day.',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-mist py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-moss text-sm mb-4">From guests who&apos;ve stayed</p>
            <h2 className="font-display text-pine text-3xl md:text-4xl leading-[1.15] text-balance">
              What people remember afterward
            </h2>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-pine text-4xl">4.7</span>
            <div>
              <Stars />
              <p className="text-stone text-sm mt-1">15 reviews</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-stone/20 rounded-lg overflow-hidden">
          {reviews.map((r) => (
            <div key={r.name} className="bg-mist p-8 flex flex-col">
              <Stars />
              <p className="text-pine leading-relaxed mt-5 flex-1">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-6 pt-5 border-t border-stone/20">
                <p className="text-pine text-sm font-medium">{r.name}</p>
                <p className="text-stone text-xs mt-0.5">{r.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
