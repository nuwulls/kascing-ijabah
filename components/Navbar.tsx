"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Manfaat", href: "#benefits" },
  { label: "Produk", href: "#product" },
  { label: "Galeri", href: "#gallery" },
  { label: "Proses", href: "#process" },
  { label: "Cara Penggunaan", href: "#usage" },
  { label: "FAQ", href: "#faq" },
];

const whatsappUrl =
  "https://wa.me/6282111170122?text=Halo%20KASCING%20IJABAH%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20produk%20pupuk%20organik.";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "pt-3" : "pt-4"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-[1.5rem] border px-4 py-3 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border-[#DDE5D7] bg-[#F8F8F2]/95 shadow-lg shadow-[#174D2A]/5 backdrop-blur-xl"
              : "border-[#E5EBDD]/70 bg-[#F8F8F2]/85 shadow-sm backdrop-blur-xl"
          }`}
        >
          {/* ==================== LOGO ==================== */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full shadow-sm sm:h-11 sm:w-11">
              <img
                src="/logo/kascing-ijabah.png"
                alt="KASCING IJABAH"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-bold tracking-wide text-[#174D2A]">
                KASCING IJABAH
              </p>

              <p className="mt-0.5 text-[9px] font-medium tracking-[0.2em] text-[#6B806C]">
                PUPUK ORGANIK
              </p>
            </div>
          </a>

          {/* ==================== DESKTOP NAVIGATION ==================== */}
          <div className="hidden items-center gap-1 xl:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-xl px-2.5 py-2 text-[12px] font-medium text-[#59665C] transition duration-200 hover:bg-[#EAF1E5] hover:text-[#174D2A] 2xl:px-3 2xl:text-[13px]"
              >
                {link.label}

                <span className="absolute bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#5D963F] transition-all duration-200 group-hover:w-4" />
              </a>
            ))}
          </div>

          {/* ==================== DESKTOP CTA ==================== */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[#174D2A] px-5 py-2.5 text-[13px] font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#0F3D21] hover:shadow-lg lg:flex"
          >
            Hubungi Kami
            <span className="text-base leading-none">→</span>
          </a>

          {/* ==================== MOBILE MENU BUTTON ==================== */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF1E5] text-[#174D2A] transition hover:bg-[#DDE9D5] xl:hidden"
          >
            <div className="relative h-5 w-5">
              {/* Top */}
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />

              {/* Bottom */}
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />

              {/* Middle */}
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-3 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
          </button>
        </div>

        {/* ==================== MOBILE / TABLET MENU ==================== */}
        <div
          className={`mx-auto max-w-7xl overflow-hidden transition-all duration-300 xl:hidden ${
            menuOpen
              ? "mt-2 max-h-[90vh] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[1.5rem] border border-[#DDE5D7] bg-[#F8F8F2]/98 p-3 shadow-xl shadow-[#174D2A]/10 backdrop-blur-xl">
            <div className="max-h-[65vh] space-y-1 overflow-y-auto">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-[#4E5D52] transition hover:bg-[#EAF1E5] hover:text-[#174D2A]"
                >
                  <span>{link.label}</span>

                  <span className="text-[#8EA185]">→</span>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="my-3 h-px bg-[#E1E8DB]" />

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#174D2A] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0F3D21]"
            >
              Hubungi Kami
              <span>→</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}