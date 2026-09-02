"use client";

import { motion } from "framer-motion";

const mistLayer = {
  hidden: { opacity: 1, y: 0 },
  visible: (i) => ({
    opacity: 0,
    y: -40 - i * 20,
    transition: {
      duration: 2.4,
      delay: 0.3 + i * 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-pine"
    >
      {/* Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F3128] via-[#16231C] to-[#0E1712]" />

      {/* Sunrise glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 3, delay: 0.6, ease: "easeOut" }}
        className="absolute left-1/2 -translate-x-1/2 bottom-[18%] w-[70vw] h-[70vw] max-w-[820px] max-h-[820px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(193,122,62,0.45) 0%, rgba(193,122,62,0.12) 45%, rgba(193,122,62,0) 70%)",
        }}
      />

      {/* Mountain silhouettes, back to front */}
      <svg
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 w-full h-[62%]"
      >
        <path
          d="M0,420 L120,340 260,400 400,300 560,380 720,260 900,360 1080,290 1260,370 1440,310 1440,700 0,700 Z"
          fill="#2A3B32"
          opacity="0.55"
        />
        <path
          d="M0,480 L160,400 340,460 520,370 700,440 880,360 1060,430 1260,380 1440,440 1440,700 0,700 Z"
          fill="#20302A"
          opacity="0.75"
        />
        <path
          d="M0,560 L200,500 420,540 640,470 860,530 1080,480 1260,520 1440,490 1440,700 0,700 Z"
          fill="#16231C"
        />
      </svg>

      {/* Mist layers that part on load */}
      <div className="absolute inset-0 flex flex-col justify-end">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={mistLayer}
            initial="hidden"
            animate="visible"
            className="h-1/3 w-full"
            style={{
              background:
                "linear-gradient(to top, rgba(241,244,241,0.9), rgba(241,244,241,0.15))",
              filter: "blur(18px)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.1 }}
          className="text-mist/70 text-sm mb-4"
        >
          GRAND VIEW HOMESTAY . MAWSMAI , SOHRA , CHERAPUNJI
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="font-display text-mist text-balance text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl font-normal max-w-3xl"
        >
          The valley is why people come back.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.6 }}
          className="text-mist/75 mt-6 max-w-md text-base md:text-lg leading-relaxed"
        >
          A small, family-run homestay perched above Mawsmai, where the clouds
          move through the room before breakfast does.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-mist/60"
      >
        <span className="text-xs tracking-wide">Scroll</span>
        <span className="block w-px h-8 bg-mist/40" />
      </motion.div>
    </section>
  );
}
