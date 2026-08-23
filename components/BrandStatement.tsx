import FadeIn from "@/components/animations/FadeIn";

export default function BrandStatement() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#174D2A] px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#5D963F]/20 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#0F3D21]/60 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#BFD7AD]">
            KASCING IJABAH
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            From organic matter
            <br />
            <span className="text-[#A7CD8A]">
              to healthier soil.
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#D0DED1] sm:text-base">
            Kami percaya bahwa tanaman yang sehat berawal dari tanah yang
            sehat. KASCING IJABAH hadir sebagai bagian dari langkah sederhana
            menuju pertanian yang lebih alami dan berkelanjutan.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mx-auto mt-10 h-16 w-px bg-[#8EB477]" />
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-sm font-medium italic text-[#BFD7AD]">
            “Solusi tanah sehat, panen meningkat.”
          </p>
        </FadeIn>
      </div>
    </section>
  );
}