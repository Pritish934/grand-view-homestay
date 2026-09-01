'use client';

import { motion } from 'framer-motion';

export default function Host() {
  return (
    <section className="bg-mist py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[1fr,1.2fr] gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="bg-fog border border-stone/25 rounded-lg p-8 md:p-10"
        >
          <p className="font-display italic text-pine text-xl md:text-2xl leading-relaxed">
            &ldquo;Thank you so much for your kind words.&rdquo;
          </p>
          <p className="text-slate text-sm mt-6">
            — the owner, replying to nearly every guest, personally
          </p>
        </motion.div>

        <div>
          <p className="text-moss text-sm mb-4">Run by the family, not a company</p>
          <h2 className="font-display text-pine text-3xl md:text-4xl leading-[1.15] text-balance mb-6">
            Guests keep saying the owner made the stay.
          </h2>
          <p className="text-slate leading-relaxed max-w-prose">
            There&apos;s no front desk and no app to check in through. The
            owner answers questions directly, points guests to the caves and
            root bridges worth the walk, and tends to remember faces the
            second time around. It&apos;s a small operation, and that&apos;s
            the point — help is a shout away, not a hotline.
          </p>
        </div>
      </div>
    </section>
  );
}
