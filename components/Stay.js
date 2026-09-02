const inclusions = [
  "Private room with a valley-facing window",
  "Hot water and warm bedding — Sohra nights get cold",
  "Home-cooked Khasi breakfast included",
  "Balcony access for sunrise and stargazing",
];

export default function Stay() {
  return (
    <section id="stay" className="bg-fog py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-14 items-start">
          <div>
            <p className="text-moss text-sm mb-4">The stay</p>
            <h2 className="font-display text-pine text-3xl md:text-4xl leading-[1.15] text-balance mb-6">
              Simple rooms. The kind you don&apos;t want to leave in the
              morning.
            </h2>
            <p className="text-slate leading-relaxed max-w-prose mb-10">
              Rooms are modest by design — clean, warm, and pointed at the view.
              What you&apos;re paying for is the position on the hillside, not
              marble in the bathroom.
            </p>
            <ul className="space-y-4">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-pine rounded-lg p-8 md:p-10 md:sticky md:top-28">
            <p className="text-mist/60 text-sm mb-2">Per night</p>
            <p className="font-display text-mist text-5xl mb-1">₹3000-₹7000</p>
            <p className="text-mist/50 text-sm mb-8">
              Breakfast included, taxes as applicable
            </p>
            <div className="h-px bg-mist/15 mb-8" />
            <a
              href="tel:"
              className="block w-full text-center bg-amber hover:bg-amberDeep transition-colors text-mist py-3.5 rounded-full text-sm font-medium mb-3"
            >
              Call to check availability
            </a>
            <a
              href="#find-us"
              className="block w-full text-center border border-mist/25 hover:border-mist/50 transition-colors text-mist py-3.5 rounded-full text-sm"
            >
              Get directions
            </a>
            {/* <p className="text-mist/40 text-xs mt-6 leading-relaxed">
              This homestay doesn&apos;t take online bookings — reach out
              directly and the owner will confirm your dates.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
