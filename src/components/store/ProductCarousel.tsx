
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
      src: "/lovable-uploads/2a825fa1-074b-4556-84e0-a400e34347dd.png",
      alt: "3D Avatar - Female Character"
    },
    {
      src: "/lovable-uploads/fb337547-ebee-4b88-9c0e-8b10fcb3fec1.png",
      alt: "3D Avatar - Male Character"
    },
    {
      src: "/lovable-uploads/cc044a15-7d2e-40e7-9ea7-613a23f663f1.png",
      alt: "3D Avatar - Stylized Character"
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            3D Avatar Prompt Pack
          </span>
        </h2>
        
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10">
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
