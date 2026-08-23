import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import Benefits from "@/components/Benefits";
import Product from "@/components/Product";
import ProductGallery from "@/components/ProductGallery";
import ProductionProcess from "@/components/ProductionProcess";
import HowItWorks from "@/components/HowItWorks";
import ProductUsage from "@/components/ProductUsage";
import Audience from "@/components/Audience";
import Sustainability from "@/components/Sustainability";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F8F2] text-[#1D2921]">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About / Brand */}
      <BrandStatement />

      {/* Benefits */}
      <Benefits />

      {/* Product */}
      <Product />

      {/* Product Gallery */}
      <ProductGallery />

      {/* Production Process */}
      <ProductionProcess />

      {/* How It Works */}
      <HowItWorks />

      {/* Product Usage */}
      <ProductUsage />

      {/* Audience */}
      <Audience />

      {/* Sustainability */}
      <Sustainability />

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}