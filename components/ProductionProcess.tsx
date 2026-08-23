"use client";

import { motion } from "framer-motion";

const processes = [
  {
    number: "01",
    title: "Penyediaan Tempat Cacing",
    description:
      "Menyiapkan tempat yang sesuai sebagai media hidup cacing ANC atau Lumbricus agar proses pengolahan bahan organik dapat berlangsung dengan baik.",
    image: "/images/process/process-1.jpg",
  },
  {
    number: "02",
    title: "Penyediaan Pakan",
    description:
      "Mengumpulkan bahan pakan organik seperti sayur-sayuran, kotoran sapi, dan bahan organik lainnya sebagai sumber makanan bagi cacing.",
    image: "/images/process/process-2.jpg",
  },
  {
    number: "03",
    title: "Pengayakan Pakan",
    description:
      "Pakan diayak terlebih dahulu untuk memastikan bahan yang diberikan memiliki kondisi yang sesuai sebelum dimasukkan ke dalam kandang cacing.",
    image: "/images/process/process-3.jpg",
  },
  {
    number: "04",
    title: "Pemberian Cairan",
    description:
      "Cairan diberikan pada media untuk membantu menjaga kondisi lingkungan yang mendukung kehidupan dan aktivitas cacing.",
    image: "/images/process/process-4.jpg",
  },
  {
    number: "05",
    title: "Pemisahan Cacing dan Pupuk",
    description:
      "Setelah proses pengolahan berlangsung, cacing dipisahkan dari pupuk hasil penguraian bahan organik.",
    image: "/images/process/process-5.jpg",
  },
  {
    number: "06",
    title: "Penjemuran Pupuk",
    description:
      "Pupuk dijemur untuk membantu mengurangi kadar air sehingga menghasilkan pupuk yang lebih siap untuk proses selanjutnya.",
    image: "/images/process/process-6.jpg",
  },
  {
    number: "07",
    title: "Pengayakan Pupuk",
    description:
      "Pupuk kembali diayak hingga mendapatkan tekstur yang lebih halus dan seragam sebelum dikemas.",
    image: "/images/process/process-7.jpg",
  },
  {
    number: "08",
    title: "Penimbangan dan Pengemasan",
    description:
      "Pupuk ditimbang sesuai takaran, kemudian dikemas agar siap digunakan dan didistribusikan.",
    image: "/images/process/process-8.jpg",
  },
];

export default function ProductionProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-1/2 top-32 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#DDE9D5]/50 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5D963F]">
            PROSES PRODUKSI
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#174D2A] sm:text-5xl">
            Dari alam,
            <br />
            <span className="text-[#5D963F]">
              menjadi pupuk berkualitas.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#68756B] sm:text-base">
            KASCING IJABAH melalui proses pengolahan yang dilakukan secara
            bertahap, mulai dari penyediaan media cacing hingga proses
            penimbangan dan pengemasan produk.
          </p>
        </motion.div>

        {/* ================= PROCESS LIST ================= */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-[#D7E4D1] md:left-1/2 md:block" />

          <div className="space-y-12 md:space-y-20">
            {processes.map((process, index) => {
              const isEven = index % 2 === 1;

              return (
                <motion.div
                  key={process.number}
                  initial={{
                    opacity: 0,
                    y: 40,
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
                    duration: 0.7,
                    delay: 0.05,
                  }}
                  className={`relative md:flex md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* ================= CARD ================= */}
                  <div className="w-full md:w-[calc(50%-45px)]">
                    <div className="group overflow-hidden rounded-[2rem] border border-[#E0E8DC] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#174D2A]/10">
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden sm:h-64">
                        <img
                          src={process.image}
                          alt={process.title}
                          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                        />

                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D21]/50 via-transparent to-transparent" />

                        {/* Number */}
                        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-sm font-bold text-[#174D2A] shadow-lg backdrop-blur-sm">
                          {process.number}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 sm:p-7">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7A9275]">
                          LANGKAH {process.number}
                        </p>

                        <h3 className="mt-2 text-xl font-bold text-[#174D2A] sm:text-2xl">
                          {process.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#68756B]">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ================= CENTER NUMBER ================= */}
                  <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-[6px] border-[#F8F8F2] bg-[#174D2A] text-sm font-bold text-white shadow-lg">
                      {process.number}
                    </div>
                  </div>

                  {/* ================= EMPTY SIDE ================= */}
                  <div className="hidden md:block md:w-[calc(50%-45px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM INFO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-20 max-w-3xl"
        >
          <div className="rounded-[2rem] border border-[#DDE9D5] bg-[#EAF1E5] p-7 text-center sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5D963F]">
              KASCING IJABAH
            </p>

            <h3 className="mt-3 text-2xl font-bold text-[#174D2A] sm:text-3xl">
              Dari proses alami hingga siap digunakan.
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#68756B]">
              Setiap tahap dilakukan untuk menghasilkan pupuk organik yang
              siap membantu merawat tanah dan mendukung pertumbuhan tanaman.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}