import FadeIn from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";

const steps = [
  {
    number: "01",
    title: "Siapkan Tanaman",
    description:
      "Pastikan area tanam atau media tanaman sudah siap untuk diberikan pupuk.",
    icon: "🌱",
  },
  {
    number: "02",
    title: "Aplikasikan Pupuk",
    description:
      "Gunakan KASCING IJABAH pada area tanah di sekitar tanaman sesuai kebutuhan.",
    icon: "🤲",
  },
  {
    number: "03",
    title: "Campurkan dengan Tanah",
    description:
      "Campurkan pupuk dengan tanah agar bahan organik dapat menyatu dengan media tanam.",
    icon: "🌿",
  },
  {
    number: "04",
    title: "Rawat & Tumbuhkan",
    description:
      "Lanjutkan perawatan tanaman secara rutin dan biarkan proses alami bekerja.",
    icon: "🌾",
  },
];

export default function ProductUsage() {
  return (
    <section
      id="usage"
      className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5D963F]">
              How To Use
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#174D2A] sm:text-5xl">
              Simple steps,
              <br />
              natural results.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#68756B] sm:text-base">
              Menggunakan KASCING IJABAH tidak harus rumit. Ikuti langkah
              sederhana berikut untuk membantu merawat tanah dan tanamanmu.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="group relative h-full overflow-hidden rounded-[2rem] border border-[#E1E8DB] bg-[#F8F8F2] p-7 transition duration-300 hover:-translate-y-2 hover:bg-[#EAF1E5] hover:shadow-xl hover:shadow-[#174D2A]/5">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DDE9D5] text-2xl transition duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>

                  <span className="text-xs font-bold tracking-widest text-[#A4B39F]">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold text-[#174D2A]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#68756B]">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.2}>
          <div className="mt-8 rounded-2xl border border-[#D8E3D1] bg-[#EAF1E5] px-6 py-5">
            <p className="text-center text-sm leading-7 text-[#536158]">
              💡 <strong className="text-[#174D2A]">Tips:</strong> Dosis dan
              frekuensi penggunaan sebaiknya disesuaikan dengan jenis tanaman,
              kondisi tanah, dan kebutuhan tanaman.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}