import FadeIn from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";

const benefits = [
  {
    number: "01",
    title: "Alami",
    description:
      "Terbuat dari bahan organik yang membantu memberikan nutrisi alami bagi tanah dan tanaman.",
    icon: "🌿",
  },
  {
    number: "02",
    title: "Menyuburkan Tanah",
    description:
      "Membantu menjaga kondisi tanah agar tetap subur dan mendukung pertumbuhan tanaman.",
    icon: "🌱",
  },
  {
    number: "03",
    title: "Ramah Lingkungan",
    description:
      "Pilihan pupuk organik yang lebih selaras dengan lingkungan dan ekosistem tanah.",
    icon: "🌍",
  },
  {
    number: "04",
    title: "Untuk Setiap Grower",
    description:
      "Cocok digunakan oleh petani, pekebun, maupun pecinta tanaman di rumah.",
    icon: "🌾",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#5D963F]">
              Why KASCING IJABAH?
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#174D2A] sm:text-5xl">
              Kebaikan dari alam,
              <br />
              untuk tanahmu.
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.number}>
              <div className="group h-full rounded-[2rem] border border-[#E1E8DB] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#174D2A]/5">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF1E5] text-2xl transition duration-300 group-hover:scale-110">
                    {benefit.icon}
                  </div>

                  <span className="text-xs font-semibold tracking-wider text-[#A4B39F]">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#174D2A]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6B766D]">
                  {benefit.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}