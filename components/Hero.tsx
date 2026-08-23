"use client";

import FadeIn from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";

const trustPoints = [
  "Alami",
  "Menyuburkan Tanah",
  "Ramah Lingkungan",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F8F8F2] px-6 pb-20 pt-36 sm:px-8 lg:min-h-screen lg:px-12 lg:pt-40"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#DDE9D5] blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-20 -left-32 h-80 w-80 rounded-full bg-[#E9E2D3] blur-3xl"
      />

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ================= TEXT ================= */}

        <div className="max-w-2xl">
          <FadeIn direction="left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9D8BF] bg-[#EAF1E5] px-4 py-2">
              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-[#5D963F]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#376C3B]">
                Pupuk Organik
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-[#174D2A] sm:text-6xl lg:text-7xl">
              Grow Naturally.
              <br />
              <span className="text-[#5D963F]">
                Harvest Better.
              </span>
            </h1>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#647166] sm:text-lg">
              Solusi alami untuk membantu menjaga kesehatan tanah dan
              mendukung pertumbuhan tanaman yang lebih baik.
            </p>
          </FadeIn>

          {/* CTA */}

          <FadeIn direction="left" delay={0.3}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#product"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#174D2A] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#174D2A]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#0F3D21]"
              >
                Kenali Produk

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-[#B9C9B0] bg-white/70 px-7 py-4 text-sm font-semibold text-[#174D2A] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </FadeIn>

          {/* TRUST POINTS */}

          <StaggerContainer className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {trustPoints.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-2 text-sm text-[#536158]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DDE9D5] text-xs text-[#174D2A]">
                    ✓
                  </span>

                  {item}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* ================= PRODUCT IMAGE ================= */}

        <FadeIn direction="right" delay={0.2}>
          <div className="relative mx-auto w-full max-w-xl">
            {/* Decorative Glow */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-12 rounded-full bg-[#AFCB9B] blur-3xl"
            />

            {/* Main Image Container */}

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 0.5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[3rem] bg-[#DDE9D5] p-4 shadow-2xl shadow-[#174D2A]/10"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#EAF1E5]">
                <img
                  src="/images/product/product-main.jpg"
                  alt="KASCING IJABAH - Pupuk Organik"
                  className="aspect-square h-full w-full object-cover"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#174D2A]/30 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Floating Information Card */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-7 left-6 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md sm:left-8"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B806C]">
                Natural
              </p>

              <p className="mt-0.5 text-sm font-bold text-[#174D2A]">
                Soil Friendly
              </p>
            </motion.div>

            {/* Floating Badge */}

            <motion.div
              animate={{
                rotate: [0, 6, -6, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-7 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#174D2A] text-xl shadow-xl sm:right-8"
            >
              🌿
            </motion.div>

            {/* Floating Leaf */}

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [10, 15, 10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-3 top-12 hidden h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-xl sm:flex"
            >
              <span className="text-4xl">🍃</span>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}