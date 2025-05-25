
import { Palette, Code, Smartphone, Globe } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Creating memorable brand experiences that resonate with your audience and stand out in the market.",
    },
    {
      icon: Globe,
      title: "Web Design",
      description: "Designing beautiful, functional websites that convert visitors into customers and reflect your brand values.",
    },
    {
      icon: Code,
      title: "Development",
      description: "Building robust, scalable applications using the latest technologies and best practices.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Crafting intuitive mobile experiences that users love and businesses depend on.",
    },
  ];

  return (
    <section id="services" className="py-32 px-6 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              What we do best
            </span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-b from-gray-900/50 to-black/50 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={24} className="text-white" />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
