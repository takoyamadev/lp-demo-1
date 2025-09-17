import { BrandStorySection } from "@/components/sections/BrandStorySection";
import CTASection from "@/components/sections/CTASection";
import FooterSection from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import ProductSection from "@/components/sections/ProductSection";
import ReviewsSection from "@/components/sections/ReviewsSection";

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <BrandStorySection />

      <ProductSection />

      <ReviewsSection />

      <CTASection />

      <FooterSection />
    </main>
  );
}
