import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const cycle = [
  "Organic Matter",
  "KASCING",
  "Healthy Soil",
  "Healthy Plant",
];

export default function Sustainability() {
  return (
    <section className="relative overflow-hidden bg-[#0F3D21] px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#5D963F]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A7CD8A]">
            Our Philosophy
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Give Back
            <br />
            <span className="text-[#A7CD8A]">to the Earth.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#C7D7C8] sm:text-base">
            Dari bahan organik, kembali memberi manfaat bagi tanah. Karena
            merawat tanaman juga berarti menjaga lingkungan tempat tanaman itu
            tumbuh.
          </p>
        </FadeIn>

        <StaggerContainer className="mx-auto mt-14 flex max-w-4xl flex-col items-center justify-center gap-4 md:flex-row">
          {cycle.map((item, index) => (
            <StaggerItem key={item}>
              <div className="flex items-center gap-4">
                <div className="rounded-full border border-[#73945F] bg-white/5 px-5 py-3 text-sm font-medium text-[#E1EBDD]">
                  {item}
                </div>

                {index < cycle.length - 1 && (
                  <span className="hidden text-[#8EB477] md:block">
                    →
                  </span>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}