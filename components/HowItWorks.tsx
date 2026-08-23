import FadeIn from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";

const steps = [
  {
    number: "01",
    title: "Organic Matter",
    description: "Bahan organik menjadi bagian dari proses alami.",
  },
  {
    number: "02",
    title: "Healthy Soil",
    description: "Tanah mendapatkan dukungan nutrisi organik.",
  },
  {
    number: "03",
    title: "Healthy Plant",
    description: "Tanaman mendapatkan lingkungan tumbuh yang baik.",
  },
  {
    number: "04",
    title: "Better Growth",
    description: "Pertumbuhan tanaman dapat berkembang lebih optimal.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#174D2A] px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#5D963F]/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#0F3D21]/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A7CD8A]">
              The Natural Cycle
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Good growth starts
              <br />
              <span className="text-[#A7CD8A]">from the ground.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#C7D7C8] sm:text-base">
              Proses alami yang saling terhubung untuk membantu menciptakan
              lingkungan tumbuh yang lebih baik bagi tanaman.
            </p>
          </div>
        </FadeIn>

        {/* Steps */}
        <StaggerContainer className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* Timeline */}
          <div className="absolute left-[12%] right-[12%] top-9 hidden h-px bg-[#5D795F] md:block" />

          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative text-center">
                {/* Number */}
                <div className="relative mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-8 border-[#174D2A] bg-[#A7CD8A] text-sm font-bold text-[#174D2A] shadow-xl shadow-black/10">
                  {step.number}
                </div>

                {/* Text */}
                <h3 className="mt-6 text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#C7D7C8]">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Statement */}
        <FadeIn delay={0.2}>
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <div className="mx-auto mb-6 h-px w-16 bg-[#73945F]" />

            <p className="text-sm font-medium italic text-[#A7CD8A]">
              “Tanah yang sehat menjadi awal dari pertumbuhan yang lebih baik.”
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}