"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "/images/product/product-main.jpg",
    title: "KASCING IJABAH",
    description:
      "Pupuk organik untuk membantu merawat tanah dan tanaman.",
    className:
      "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/product/product-detail.jpg",
    title: "Detail Produk",
    description:
      "Kenali lebih dekat produk KASCING IJABAH.",
    className:
      "md:col-start-3 md:row-start-1",
  },
  {
    src: "/images/product/product-usage.jpg",
    title: "Cara Penggunaan",
    description:
      "Mudah diaplikasikan pada tanah dan media tanam.",
    className:
      "md:col-start-4 md:row-start-1 md:row-span-2",
  },
  {
    src: "/images/product/product-plant.jpg",
    title: "Untuk Tanamanmu",
    description:
      "Cocok untuk berbagai kebutuhan tanaman.",
    className:
      "md:col-start-3 md:row-start-2",
  },
  {
    src: "/images/product/product-garden.jpg",
    title: "Kembali ke Alam",
    description:
      "Bagian dari langkah menuju pertanian yang lebih alami.",
    className:
      "md:col-span-3 md:row-start-3",
  },
  {
    src: "/images/product/product-soil.jpg",
    title: "Tanah yang Sehat",
    description:
      "Perawatan tanah menjadi bagian penting dari pertumbuhan tanaman.",
    className:
      "md:col-start-4 md:row-start-3",
  },
];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof images)[number] | null
  >(null);

  return (
    <>
      <section
        id="gallery"
        className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5D963F]">
              KASCING IJABAH
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#174D2A] sm:text-5xl">
              Lebih dekat dengan
              <br />
              <span className="text-[#5D963F]">
                produk kami.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#68756B] sm:text-base">
              Kenali KASCING IJABAH lebih dekat dan lihat
              bagaimana produk organik ini menjadi bagian dari
              perjalanan merawat tanah dan tanaman.
            </p>
          </motion.div>

          {/* Gallery */}
          <div
            className="
              mx-auto
              mt-14
              grid
              max-w-6xl
              auto-rows-[180px]
              grid-cols-1
              gap-4
              sm:grid-cols-2
              sm:auto-rows-[220px]
              md:grid-cols-4
              md:auto-rows-[190px]
              md:gap-5
            "
          >
            {images.map((image, index) => (
              <motion.button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(image)}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  bg-[#DDE9D5]
                  text-left
                  shadow-sm
                  transition-shadow
                  duration-300
                  hover:shadow-2xl
                  hover:shadow-[#174D2A]/10
                  ${image.className}
                `}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0F3D21]/85
                    via-[#0F3D21]/10
                    to-transparent
                    opacity-0
                    transition
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Content */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    translate-y-4
                    p-5
                    opacity-0
                    transition
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#BFD7AD]">
                    KASCING IJABAH
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-white">
                    {image.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#D7E5D8]">
                    {image.description}
                  </p>
                </div>

                {/* Zoom Icon */}
                <div
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                    text-lg
                    text-[#174D2A]
                    opacity-0
                    shadow-lg
                    backdrop-blur-sm
                    transition
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  +
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-[#0F3D21]/90
              p-6
              backdrop-blur-md
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="
                absolute
                right-6
                top-6
                z-10
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-2xl
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20
              "
              aria-label="Tutup gambar"
            >
              ×
            </button>

            {/* Image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="
                relative
                max-h-[85vh]
                max-w-5xl
                overflow-hidden
                rounded-[2rem]
                bg-white
                shadow-2xl
              "
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="
                  max-h-[85vh]
                  w-auto
                  max-w-full
                  object-contain
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  bg-gradient-to-t
                  from-black/70
                  to-transparent
                  px-6
                  pb-6
                  pt-16
                "
              >
                <h3 className="text-xl font-bold text-white">
                  {selectedImage.title}
                </h3>

                <p className="mt-1 text-sm text-white/80">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}