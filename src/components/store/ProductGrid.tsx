
import { ArrowRight } from "lucide-react";

export const ProductGrid = () => {
  const products = [
    {
      id: "3d-avatar-pack",
      title: "3D Avatar Prompt Pack",
      description: "Create stunning 3D-style avatars with our expertly crafted prompt collection",
      price: 8,
      originalPrice: 10,
      image: "/lovable-uploads/8111e567-c7bc-4a84-b171-600de49e3d6f.png",
      category: "Avatar"
    },
    {
      id: "ui-design-pack",
      title: "Mobile UI Design Pack",
      description: "Generate beautiful mobile app interfaces and UI components",
      price: 12,
      originalPrice: 15,
      image: "/lovable-uploads/6581d11c-5be4-4274-8345-ebffb07fc1bc.png",
      category: "UI/UX"
    },
    {
      id: "app-mockup-pack",
      title: "App Mockup Collection",
      description: "Professional app presentations and device mockups",
      price: 15,
      originalPrice: 20,
      image: "/lovable-uploads/03e1fc27-bf8c-488d-aab2-32824de46039.png",
      category: "Mockup"
    },
    {
      id: "character-design-pack",
      title: "Character Design Studio",
      description: "Diverse character designs for games, stories, and branding",
      price: 10,
      originalPrice: 12,
      image: "/lovable-uploads/2a825fa1-074b-4556-84e0-a400e34347dd.png",
      category: "Character"
    }
  ];

  const handleProductClick = (productId: string) => {
    if (productId === "3d-avatar-pack") {
      // Scroll to product details section
      const productDetails = document.getElementById('product-details');
      if (productDetails) {
        productDetails.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Prompt
          </span>{" "}
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Collections
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/30 transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-white">${product.price}</span>
                      <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                    </div>
                    
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
