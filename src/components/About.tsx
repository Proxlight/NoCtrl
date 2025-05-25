
export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                🔥 About No Ctrl
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  A digital creative hub dedicated to empowering
                </span>{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  AI artists and dreamers
                </span>
              </h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                No Ctrl is dedicated to empowering artists, designers, and dreamers to generate jaw-dropping AI images—without limitations. In a world overflowing with tools, we believe it's not just the software that matters—it's what you say to it.
              </p>
              
              <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-2xl p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-green-400 mb-3">🎯 Our Mission</h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Make AI art creation accessible, inspiring, and limitless. We exist to remove the learning curve, fuel creativity with expertly engineered prompts, and help creators produce professional-grade visuals in seconds.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-gray-400 text-sm sm:text-base">Prompts created</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">5K+</div>
                <div className="text-gray-400 text-sm sm:text-base">Happy creators</div>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-white/10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop"
                alt="AI art generation workspace"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};
