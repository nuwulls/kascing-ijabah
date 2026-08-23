import FadeIn from "@/components/animations/FadeIn";

export default function Footer() {
  return (
    <footer className="bg-[#0F3D21] px-6 pb-8 pt-16 text-white sm:px-8 lg:px-12">
      <FadeIn>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <a href="#home" className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-white">
                  <img
                    src="/logo/kascing-ijabah.png"
                    alt="KASCING IJABAH"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="font-bold tracking-wide">
                    KASCING IJABAH
                  </p>

                  <p className="text-[10px] tracking-[0.2em] text-[#A7CD8A]">
                    PUPUK ORGANIK
                  </p>
                </div>
              </a>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#B8C9B9]">
                Solusi tanah sehat, panen meningkat. Bersama alam untuk
                pertumbuhan yang lebih baik.
              </p>

              <a
                href="https://wa.me/6282111170122"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#55775D] px-4 py-2.5 text-xs font-medium text-[#D5E3D5] transition hover:border-[#A7CD8A] hover:bg-[#174D2A]"
              >
                <span>WhatsApp</span>
                <span>→</span>
              </a>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-white">
                Navigation
              </h3>

              <div className="mt-5 grid grid-cols-1 gap-3 text-sm text-[#B8C9B9]">
                {[
                  ["#home", "Beranda"],
                  ["#about", "Tentang"],
                  ["#benefits", "Manfaat"],
                  ["#product", "Produk"],
                  ["#usage", "Cara Penggunaan"],
                  ["#faq", "FAQ"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="transition hover:translate-x-1 hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-white">
                Contact
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-[#B8C9B9]">
                <a
                  href="https://wa.me/6282111170122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#8FA391]">
              © 2026 KASCING IJABAH. All rights reserved.
            </p>

            <a
              href="#home"
              className="text-xs text-[#8FA391] transition hover:text-white"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}