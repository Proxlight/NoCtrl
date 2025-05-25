
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StoreHero } from "@/components/store/StoreHero";
import { ProductCarousel } from "@/components/store/ProductCarousel";
import { ProductGrid } from "@/components/store/ProductGrid";
import { ProductDetails } from "@/components/store/ProductDetails";

const Store = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <StoreHero />
      <ProductGrid />
      <ProductDetails />
      <Footer />
    </div>
  );
};

export default Store;
