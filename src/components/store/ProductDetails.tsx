
import { ArrowRight, Check } from "lucide-react";

export const ProductDetails = () => {
  const features = [
    "50+ Professional 3D Avatar Prompts",
    "Multiple Style Variations",
    "Compatible with Midjourney, DALL·E, Ideogram",
    "Commercial License Included",
    "Instant Download",
    "Lifetime Updates"
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  3D Avatar Prompt Pack
                </span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Create stunning 3D-style avatars with our expertly crafted prompt collection. 
                Perfect for profile pictures, character design, and digital art projects.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-green-400">What's Included:</h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check size={20} className="text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-bold text-white">$8</span>
                    <span className="text-lg text-gray-400 line-through">$10</span>
                  </div>
                  <p className="text-green-400 text-sm font-medium">Limited Time Offer</p>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/25">
                Buy Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:order-first">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10">
                  <img
                    src="/lovable-uploads/2a825fa1-074b-4556-84e0-a400e34347dd.png"
                    alt="3D Avatar Sample 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10">
                  <img
                    src="/lovable-uploads/cc044a15-7d2e-40e7-9ea7-613a23f663f1.png"
                    alt="3D Avatar Sample 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10">
                  <img
                    src="/lovable-uploads/fb337547-ebee-4b88-9c0e-8b10fcb3fec1.png"
                    alt="3D Avatar Sample 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
