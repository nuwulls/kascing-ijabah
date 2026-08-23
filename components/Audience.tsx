import FadeIn from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";

const audiences = [
  {
    icon: "🌾",
    title: "Petani",
    description:
      "Mendukung kebutuhan pertanian dan membantu menjaga kualitas tanah.",
  },
  {
    icon: "🪴",
    title: "Pekebun",
    description:
      "Pilihan untuk merawat tanaman di kebun maupun lingkungan rumah.",
  },
  {
    icon: "🌱",
    title: "Penggemar Tanaman",
    description:
      "Untuk kamu yang senang menanam dan ingin merawat tanaman secara alami.",
  },
];

export default function Audience() {
  return (
    <section className="bg-[#F0F3EB] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5D963F]">
              Made For Every Grower
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#174D2A] sm:text-5xl">
              Siapa pun bisa mulai
              <br />
              dari tanah yang sehat.
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <StaggerItem key={audience.title}>
              <div className="group h-full rounded-[2rem] bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EAF1E5] text-4xl transition group-hover:scale-110">
                  {audience.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#174D2A]">
                  {audience.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6B766D]">
                  {audience.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}