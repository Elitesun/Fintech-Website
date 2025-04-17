const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-6" data-aos="fade-up">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/60"></div>
            <div className="relative max-w-5xl mx-auto text-center">
                <span className="inline-block text-blue-400 font-mono text-lg mb-4" data-aos="fade-up" data-aos-delay="100">Revolutionizing Finance</span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text" data-aos="fade-up" data-aos-delay="200">
                    AI-Powered Financial Solutions
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
                    Experience the future of finance with our cutting-edge AI technology. We're transforming traditional banking into intelligent, personalized solutions for tomorrow.
                </p>
                <div className="flex items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="400">
                    <a href="#" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:opacity-90 transition-all font-medium">
                        Get Started
                        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;