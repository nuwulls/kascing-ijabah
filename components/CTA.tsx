"use client";

import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

export default function CTA() {
  const whatsappUrl =
    "https://wa.me/6282111170122?text=Halo%20KASCING%20IJABAH%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20produk%20pupuk%20organik.";

  return (
    <section
      id="contact"
      className="bg-[#174D2A] px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
    >
      <FadeIn>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#0F3D21] px-7 py-16 text-center shadow-2xl shadow-black/10 sm:px-12 lg:py-20">
          {/* Label */}
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BFD7AD]">
            Start Growing
          </p>

          {/* Heading */}
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Mulai dari tanah
            <br />
            yang sehat.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#D7E5D8] sm:text-base">
            Rawat tanahnya. Tumbuhkan tanamannya. Nikmati hasilnya bersama
            KASCING IJABAH.
          </p>

          {/* CTA Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#DDE9D5] px-8 py-4 text-sm font-semibold text-[#174D2A] shadow-xl transition-colors duration-300 hover:bg-white"
          >
            Hubungi Kami
            <span className="text-base">→</span>
          </motion.a>

          {/* Decorative line */}
          <div className="mx-auto mt-12 h-px max-w-xs bg-white/10" />

          <p className="mt-5 text-xs tracking-wide text-white/50">
            Pupuk organik untuk tanah yang lebih baik.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}