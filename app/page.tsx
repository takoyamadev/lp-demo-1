import { BrandStory } from "@/components/sections/BrandStory";
import { CustomerReviews } from "@/components/sections/CustomerReviews";
import { Hero } from "@/components/sections/Hero";
import { ProductIntroduction } from "@/components/sections/ProductIntroduction";

export default function Page() {
  return (
    <main className="min-h-screen pt-16">
      <Hero />

      <BrandStory />

      <ProductIntroduction />

      <CustomerReviews />
    </main>
  );
}
