
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const ProductCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/03e1fc27-bf8c-488d-aab2-32824de46039.png",
      alt: "AI Chat Interface Design"
    },
    {
      src: "/lovable-uploads/6581d11c-5be4-4274-8345-ebffb07fc1bc.png",
      alt: "Mobile App UI Collection"
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Featured AI Prompt Packs
          </span>
        </h2>
        
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-2">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};
