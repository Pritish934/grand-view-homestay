"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stars = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.round(Math.random() * 100),
  y: Math.round(Math.random() * 55),
  r: Math.random() * 1.1 + 0.4,
  delay: Math.random() * 3,
}));

export default function ViewSection() {
  return (
    <section id="view" className="bg-mist py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <div>
          <p className="text-moss text-sm mb-4">What the name means</p>
          <h2 className="font-display text-pine text-4xl md:text-5xl leading-[1.1] text-balance mb-6">
            Sunrise over the balcony, then the whole sky at night.
          </h2>
          <p className="text-slate leading-relaxed max-w-prose">
            Grand View sits above the village with nothing but hillside between
            the balcony and the valley floor. Mornings open with fog sitting in
            the folds of the hills, burning off as the sun clears the ridge.
            After dark, with almost no light pollution nearby, the stars come
            out in a way most guests haven&apos;t seen since they were children.
          </p>
          <p className="text-slate leading-relaxed max-w-prose mt-4 italic">
            &ldquo;You can watch the sunrise from the balcony, and at night you
            can see the stars.&rdquo;
          </p>
          <p className="text-stone text-sm mt-2">— a recent guest</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-lg overflow-hidden aspect-[4/5] bg-pine"
        >
          <svg
            viewBox="0 0 400 500"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="400" height="500" fill="#16231C" />
            {stars.map((s) => (
              <motion.circle
                key={s.id}
                cx={(s.x / 100) * 400}
                cy={(s.y / 100) * 500}
                r={s.r}
                fill="#F1F4F1"
                initial={{ opacity: 0.15 }}
                animate={{ opacity: [0.15, 0.9, 0.15] }}
                transition={{
                  duration: 3.5,
                  delay: s.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            <ellipse
              cx="120"
              cy="90"
              rx="34"
              ry="34"
              fill="#F1F4F1"
              opacity="0.9"
            />
            <ellipse cx="132" cy="80" rx="34" ry="34" fill="#16231C" />
            <path
              d="M0,320 L60,270 140,310 220,240 300,300 400,260 400,500 0,500 Z"
              fill="#20302A"
            />
            <path
              d="M0,380 L90,330 200,370 320,320 400,350 400,500 0,500 Z"
              fill="#16231C"
            />
          </svg>
          <Image
            src="/images/sunrise.jpeg"
            alt="The view from the balcony, most nights"
            width={400}
            height={500}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-5 left-5 text-mist/80 text-sm">
            The view from the balcony, most nights
          </div>
        </motion.div>
      </div>
    </section>
  );
}
