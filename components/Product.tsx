"use client";

import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

export default function Product() {
  const features = [
    "Bahan organik",
    "Mendukung kesuburan tanah",
    "Ramah lingkungan",
    "Mudah digunakan",
  ];

  const whatsappUrl =
    "https://wa.me/6282111170122?text=Halo%20KASCING%20IJABAH%2C%20saya%20ingin%20memesan%20pupuk%20organik%20KASCING%20IJABAH%20berat%201%20kg.";

  return (
    <section
      id="product"
      className="overflow-hidden bg-[#EAF1E5] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* =========================
            PRODUCT IMAGE
        ========================== */}
        <FadeIn direction="left">
          <div className="relative mx-auto w-full max-w-xl">
            {/* Decorative background */}
            <div className="absolute -inset-6 rounded-[3rem] bg-[#C7DDB9]/50 blur-2xl" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.7,
                },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative overflow-hidden rounded-[2.5rem] bg-[#D6E5CA] p-4 shadow-xl shadow-[#174D2A]/10 sm:p-6"
            >
              <div className="overflow-hidden rounded-[2rem] bg-white">
                <img
                  src="/images/product/product-main.jpg"
                  alt="KASCING IJABAH - Pupuk Organik"
                  className="aspect-square h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Floating information */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="absolute bottom-8 left-8 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md sm:bottom-10 sm:left-10"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6B806C]">
                  Berat Produk
                </p>

                <p className="mt-1 text-xl font-black text-[#174D2A]">
                  1 kg
                </p>
              </motion.div>

              {/* Price */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                }}
                className="absolute right-8 top-8 rounded-2xl bg-[#174D2A] px-5 py-4 text-white shadow-xl sm:right-10 sm:top-10"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#BFD7AD]">
                  Harga
                </p>

                <p className="mt-1 text-xl font-black">
                  Rp5.000
                </p>
              </motion.div>
            </motion.div>
          </div>
        </FadeIn>

        {/* =========================
            PRODUCT INFORMATION
        ========================== */}
        <FadeIn direction="right" delay={0.15}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5D963F]">
              Our Product
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#174D2A] sm:text-5xl">
              Nature&apos;s nutrients,
              <br />
              made for your soil.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#627063]">
              KASCING IJABAH hadir sebagai pupuk organik yang membantu
              memberikan nutrisi bagi tanah dan mendukung lingkungan tumbuh
              yang lebih baik bagi tanaman.
            </p>

            {/* =========================
                PRICE & WEIGHT
            ========================== */}
            <div className="mt-8 grid max-w-lg grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[#D3E1CC] bg-white/80 p-5">
                <p className="text-xs font-medium text-[#718071]">
                  Berat
                </p>

                <p className="mt-1 text-2xl font-black text-[#174D2A]">
                  1 kg
                </p>
              </div>

              <div className="rounded-2xl border border-[#D3E1CC] bg-white/80 p-5">
                <p className="text-xs font-medium text-[#718071]">
                  Harga
                </p>

                <p className="mt-1 text-2xl font-black text-[#174D2A]">
                  Rp5.000
                </p>
              </div>
            </div>

            {/* =========================
                FEATURES
            ========================== */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.08,
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#174D2A] text-xs text-white">
                    ✓
                  </span>

                  <span className="text-sm font-medium text-[#3F5144]">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* =========================
                CTA
            ========================== */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#174D2A] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#174D2A]/15 transition hover:bg-[#0F3D21]"
            >
              Pesan Sekarang
              <span>→</span>
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}