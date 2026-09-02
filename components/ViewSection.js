"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const stars = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  x: Math.round(Math.random() * 100),
  y: Math.round(Math.random() * 65),
  r: Math.random() * 1.2 + 0.35,
  delay: Math.random() * 4,
}));

const rooms = [
  {
    id: 1,
    name: "Normal Cottage with One room",
    image: "/images/homestay.jpeg",
    price: "₹3000",
    period: "with breakfast",
    description:
      "A quiet suite with a private balcony overlooking the hills and valley with 2 single cottage with 1 double bed",
  },
  {
    id: 2,
    name: "Family Cottage with 2 double beds and 2 single beds",
    image: "/images/cottage.jpeg",
    price: "₹7000",
    period: "per night",
    description:
      "A warm, intimate room designed for slow mornings and peaceful evenings.",
  },
];

const galleryImages = [
  {
    id: 1,
    src: "/images/cloudview.jpeg",
    alt: "Mountain view from the homestay",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: "/images/balcony-cloud.jpeg",
    alt: "Cozy homestay interior",
    className: "md:row-span-1",
  },
  {
    id: 3,
    src: "/images/hillview.jpeg",
    alt: "Balcony overlooking the valley",
    className: "md:row-span-2",
  },
  {
    id: 4,
    src: "/images/balcony.jpeg",
    alt: "Morning view",
    className: "md:col-span-1",
  },
  {
    id: 5,
    src: "/images/sunrise.jpeg",
    alt: "Homestay details",
    className: "md:col-span-2",
  },
  {
    id: 6,
    src: "/images/outdoor.jpeg",
    alt: "Evening at the homestay",
    className: "md:col-span-1",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ViewSection() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="view" className="bg-mist overflow-hidden">
      {/* =====================================================
          VIEW SECTION
      ===================================================== */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          {/* TEXT */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-moss text-sm mb-4 tracking-wide uppercase">
              What the name means
            </p>

            <h2 className="font-display text-pine text-4xl md:text-6xl leading-[1.05] text-balance mb-7">
              Sunrise over the balcony,
              <br />
              then the whole sky at night.
            </h2>

            <p className="text-slate leading-relaxed max-w-prose">
              Grand View sits above the village with nothing but hillside
              between the balcony and the valley floor. Mornings open with fog
              sitting in the folds of the hills, burning off as the sun clears
              the ridge.
            </p>

            <p className="text-slate leading-relaxed max-w-prose mt-5">
              After dark, with almost no light pollution nearby, the stars come
              out in a way most guests haven't seen since they were children.
            </p>

            <div className="mt-8 border-l border-moss/40 pl-5">
              <p className="text-slate italic leading-relaxed">
                “You can watch the sunrise from the balcony, and at night you
                can see the stars.”
              </p>

              <p className="text-stone text-sm mt-3">— a recent guest</p>
            </div>
          </motion.div>

          {/* VIEW IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative rounded-xl overflow-hidden aspect-[4/5] bg-pine group"
          >
            {/* Animated stars background */}
            <motion.svg
              viewBox="0 0 400 500"
              className="absolute inset-0 w-full h-full z-0"
              preserveAspectRatio="xMidYMid slice"
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <rect width="400" height="500" fill="#16231C" />

              {stars.map((s) => (
                <motion.circle
                  key={s.id}
                  cx={(s.x / 100) * 400}
                  cy={(s.y / 100) * 500}
                  r={s.r}
                  fill="#F1F4F1"
                  animate={{
                    opacity: [0.1, 0.9, 0.15],
                  }}
                  transition={{
                    duration: 3 + s.delay,
                    delay: s.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Moon */}
              <motion.ellipse
                cx="120"
                cy="90"
                rx="34"
                ry="34"
                fill="#F1F4F1"
                opacity="0.9"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <ellipse cx="132" cy="80" rx="34" ry="34" fill="#16231C" />

              {/* Hills */}
              <path
                d="M0,320 L60,270 140,310 220,240 300,300 400,260 400,500 0,500 Z"
                fill="#20302A"
              />

              <path
                d="M0,380 L90,330 200,370 320,320 400,350 400,500 0,500 Z"
                fill="#16231C"
              />
            </motion.svg>

            {/* Actual image */}
            <motion.div
              className="absolute inset-0 z-10"
              whileHover={{ scale: 1.04 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src="/images/sunrise.jpeg"
                alt="The view from the balcony"
                fill
                priority
                className="object-cover"
              />
            </motion.div>

            {/* Gradient */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Caption */}
            <motion.div
              className="absolute bottom-5 left-5 z-30 text-white/90 text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
            >
              The view from the balcony, most nights
            </motion.div>

            {/* Small decorative number */}
            <span className="absolute top-5 right-5 z-30 text-white/70 text-xs tracking-widest">
              01 / VIEW
            </span>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          SEVEN SISTERS WATERFALL
      ===================================================== */}
      <div className="bg-[#E8ECE7] py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            {/* WATERFALL IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: -40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative rounded-xl overflow-hidden aspect-[4/5] bg-pine group"
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src="/images/Seven sisters falls.jpg"
                  alt="Seven Sisters Waterfall near Grand View Homestay"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Caption */}
              <motion.div
                className="absolute bottom-5 left-5 z-20 text-white/90 text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
              >
                Seven Sisters Waterfall
              </motion.div>

              {/* Number */}
              <span className="absolute top-5 right-5 z-20 text-white/70 text-xs tracking-widest">
                02 / LOCATION
              </span>
            </motion.div>

            {/* TEXT */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-moss text-sm mb-4 tracking-wide uppercase">
                Right outside your stay
              </p>

              <h2 className="font-display text-pine text-4xl md:text-6xl leading-[1.05] text-balance mb-7">
                Wake up
                <br />
                <span className="text-moss">to Seven Sisters.</span>
              </h2>

              <p className="text-slate leading-relaxed max-w-prose">
                Grand View Homestay sits directly opposite the breathtaking
                Seven Sisters Waterfall, putting one of the region's most
                beautiful natural landmarks right in front of you.
              </p>

              <p className="text-slate leading-relaxed max-w-prose mt-5">
                No long drives, no complicated routes. Step outside, look across
                the valley and watch the waterfall transform with the changing
                light throughout the day.
              </p>

              {/* Highlight */}
              <div className="mt-8 border-l-2 border-moss pl-5">
                <p className="font-display text-pine text-xl md:text-2xl leading-relaxed">
                  “The waterfall is right opposite the homestay.”
                </p>

                <p className="text-stone text-sm mt-3 tracking-wide">
                  — Seven Sisters Waterfall
                </p>
              </div>

              {/* Location detail */}
              <div className="mt-8 flex items-center gap-3 text-moss text-sm">
                <span className="w-8 h-px bg-moss" />
                <span className="uppercase tracking-widest">
                  Just across the valley
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ROOMS
      ===================================================== */}
      <div className="bg-[#E8ECE7] py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-14"
          >
            <p className="text-moss text-sm uppercase tracking-wide mb-4">
              Stay with us
            </p>

            <h2 className="font-display text-pine text-4xl md:text-6xl max-w-2xl leading-[1.05]">
              Rooms made for
              <br />
              slowing down.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <motion.article
                key={room.id}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-pine">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Price */}
                  <div className="absolute top-5 right-5 bg-mist/95 backdrop-blur-sm px-4 py-3 rounded-lg">
                    <p className="text-pine font-medium">{room.price}</p>

                    <p className="text-slate text-xs mt-0.5">{room.period}</p>
                  </div>

                  {/* Number */}
                  <span className="absolute top-5 left-5 text-white text-xs tracking-widest">
                    0{index + 1}
                  </span>
                </div>

                {/* Details */}
                <div className="pt-5 flex justify-between gap-8">
                  <div>
                    <h3 className="font-display text-pine text-2xl md:text-3xl">
                      {room.name}
                    </h3>

                    <p className="text-slate text-sm leading-relaxed mt-2 max-w-md">
                      {room.description}
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="hidden md:flex items-center text-moss text-sm whitespace-nowrap"
                  >
                    Explore →
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
      {/* =====================================================
          GALLERY
      ===================================================== */}
      <div className="bg-mist py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {/* Heading */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >
            <div>
              <p className="text-moss text-sm uppercase tracking-wide mb-4">
                A glimpse inside
              </p>

              <h2 className="font-display text-pine text-4xl md:text-6xl leading-[1.05]">
                Life at Grand View.
              </h2>
            </div>

            <p className="text-slate max-w-sm text-sm leading-relaxed">
              Quiet mornings, warm interiors, mountain air and evenings spent
              looking at a sky full of stars.
            </p>
          </motion.div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px] gap-4">
            {galleryImages.map((image, index) => (
              <motion.button
                key={image.id}
                type="button"
                onClick={() => setActiveImage(image)}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                }}
                className={`relative overflow-hidden rounded-lg bg-pine ${image.className}`}
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100"
                  whileHover={{
                    opacity: 1,
                  }}
                />

                <span className="absolute bottom-4 right-4 text-white text-xs tracking-widest opacity-0 hover:opacity-100 transition-opacity">
                  VIEW
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      {/* =====================================================
          LIGHTBOX
      ===================================================== */}
      {activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setActiveImage(null)}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full max-w-5xl aspect-[16/10]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-contain"
            />

            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 text-white text-sm"
            >
              CLOSE ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
