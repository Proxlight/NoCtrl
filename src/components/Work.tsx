
import { ExternalLink, ArrowRight } from "lucide-react";

export const Work = () => {
  const projects = [
    {
      title: "Zenith Finance",
      category: "Fintech Platform",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      description: "A comprehensive financial platform redesign focusing on user experience and trust.",
    },
    {
      title: "Lumina Health",
      category: "Healthcare App",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      description: "Mobile health application connecting patients with healthcare providers seamlessly.",
    },
    {
      title: "Vertex Studios",
      category: "Creative Agency",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      description: "Brand identity and website for a cutting-edge creative studio.",
    },
    {
      title: "Echo Commerce",
      category: "E-commerce Platform",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      description: "Next-generation e-commerce platform with AI-powered recommendations.",
    },
  ];

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
            Our Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Projects we're proud of
            </span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Each project is a unique challenge that we approach with creativity, strategy, and technical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm text-purple-400 font-medium mb-2">{project.category}</div>
                  <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
            View all projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
