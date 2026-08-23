"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

const faqs = [
  {
    question: "Apa itu KASCING IJABAH?",
    answer:
      "KASCING IJABAH merupakan pupuk organik yang ditujukan untuk membantu menjaga kesuburan tanah dan mendukung pertumbuhan tanaman secara alami.",
  },
  {
    question: "KASCING IJABAH cocok untuk tanaman apa saja?",
    answer:
      "Pupuk organik dapat digunakan untuk berbagai kebutuhan tanaman, baik tanaman kebun, tanaman hias, maupun tanaman yang dibudidayakan. Penggunaan sebaiknya disesuaikan dengan jenis dan kebutuhan tanaman.",
  },
  {
    question: "Bagaimana cara menggunakan KASCING IJABAH?",
    answer:
      "KASCING IJABAH dapat diaplikasikan pada tanah atau media tanam di sekitar tanaman. Untuk hasil yang tepat, dosis penggunaannya perlu disesuaikan dengan jenis tanaman dan kondisi media tanam.",
  },
  {
    question: "Apakah produk ini bisa digunakan untuk tanaman di rumah?",
    answer:
      "Bisa. KASCING IJABAH dapat menjadi pilihan bagi kamu yang merawat tanaman di rumah, kebun, maupun lingkungan dengan pot atau media tanam lainnya.",
  },
  {
    question: "Bagaimana cara membeli KASCING IJABAH?",
    answer:
      "Kamu bisa langsung menghubungi kami melalui WhatsApp. Tim kami akan membantu memberikan informasi mengenai produk dan pemesanannya.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-[#F0F3EB] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5D963F]">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#174D2A] sm:text-5xl">
              Ada yang ingin
              <br />
              kamu tanyakan?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#68756B] sm:text-base">
              Beberapa pertanyaan yang sering ditanyakan tentang KASCING IJABAH.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="overflow-hidden rounded-2xl border border-[#DDE5D7] bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-[#174D2A] sm:text-base">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF1E5] text-lg text-[#174D2A]"
                  >
                    +
                  </motion.span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm leading-7 text-[#68756B]">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}