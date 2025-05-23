import Image from 'next/image';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const Hero = () => {
    const images = ['/img/Vr.jpg', '/img/Vrfeel.jpg', '/img/Vrtouch.jpg', '/img/Vr.jpg', '/img/Vrfeel.jpg', '/img/Vrtouch.jpg'];

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-6 overflow-hidden" id='hero'>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#000_0%,_#000B3B_100%)]" style={{ height: 'calc(100% - 150px)' }}>
                <div className="absolute inset-0" style={{
                    backgroundImage: 'url("/img/bg.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.10',
                    height: '100%',
                }}></div>
            </div>
            
            <div className="relative max-w-5xl mx-auto text-center mb-16">
                <h2 className="mb-4 tracking-wider" data-aos="zoom-in">Our Mission</h2>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text" data-aos="slide-down" data-aos-delay="200">
                    We're building the future of finance.
                    <span className="block mt-4 text-3xl md:text-5xl lg:text-6xl">With AI. For everyone.</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" data-aos="fade-right" data-aos-delay="600">
                    NeuraBank uses cutting-edge AI to simplify money management, automate wealth building, and democratize access to financial tools once reserved for the elite.
                </p>
                <div className="flex items-center justify-center gap-4" data-aos="zoom-in" data-aos-delay="800">
                    <a href="#" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:opacity-90 transition-all font-medium text-lg group">
                        Start Your Journey
                        <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="relative w-full" data-aos="fade-left" data-aos-delay="1000">
                <InfiniteMovingCards 
                    direction="right" 
                    speed="normal" 
                    pauseOnHover={true}
                    items={images.map((src, index) => (
                        <div 
                            key={index} 
                            className="relative w-[300px] h-[200px] rounded-xl overflow-hidden group"
                        >
                            <Image
                                src={src}
                                alt="vr"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                />
            </div>
        </section>
    );
}

export default Hero;