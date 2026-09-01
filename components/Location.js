const steps = [
  {
    title: "Reach Shillong",
    text: "Fly into Guwahati and take a shared or private taxi to Shillong, roughly 3 hours by road.",
  },
  {
    title: "Continue to Sohra",
    text: "From Shillong, it\u2019s another 1.5 hours through the hills to Sohra (Cherrapunji).",
  },
  {
    title: "Head to Mawsmai",
    text: "Mawsmai village is a short 10-minute drive past central Sohra, near the caves and root bridge.",
  },
];

export default function Location() {
  return (
    <section id="find-us" className="bg-pine py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-amber text-sm mb-4">Getting here</p>
            <h2 className="font-display text-mist text-3xl md:text-4xl leading-[1.15] text-balance mb-10">
              Mawsmai, Sohra, Meghalaya 793108
            </h2>

            <ol className="space-y-8">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span className="font-display text-amber text-2xl leading-none shrink-0 w-8">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-mist font-medium mb-1">{step.title}</p>
                    <p className="text-mist/60 text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <a
              href="https://maps.app.goo.gl/FP47TidteUYSxKnN7?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 text-mist border-b border-mist/40 hover:border-mist pb-0.5 text-sm"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="relative rounded-lg overflow-hidden bg-pineLight min-h-[320px]">
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect width="400" height="400" fill="#1F3128" />
              <path
                d="M0,200 Q100,120 200,190 T400,160 V400 H0 Z"
                fill="#20302A"
              />
              <path
                d="M0,260 Q120,210 220,250 T400,230 V400 H0 Z"
                fill="#16231C"
              />
              <circle cx="205" cy="150" r="6" fill="#C17A3E" />
              <circle cx="205" cy="150" r="12" fill="#C17A3E" opacity="0.3" />
              <text
                x="220"
                y="155"
                fill="#F1F4F1"
                fontSize="13"
                fontFamily="var(--font-manrope)"
              >
                Grand View Homestay
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
