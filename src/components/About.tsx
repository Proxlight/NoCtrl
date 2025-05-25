
export const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                About Noctrl
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  We're a creative studio that believes in the power of
                </span>{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  exceptional design
                </span>
              </h3>
            </div>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              Founded in 2020, Noctrl has been at the forefront of digital innovation, 
              helping brands tell their stories through compelling visual narratives and 
              seamless user experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-white mb-2">150+</div>
                <div className="text-gray-400">Projects completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">Happy clients</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=600&fit=crop"
                alt="Creative workspace"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};
