import { Sparkles } from 'lucide-react';
import Star from './Star';
const Testimony = () => {
return (
<div>
    {/* Stats Section */}
    <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-2">TESTIMONIALS / STATS</h2>
        <p className="text-center text-gray-400 mb-16">Why People Choose Us</p>

        <div className="grid grid-cols-2 gap-8 text-center mb-16">
            <div>
                <p className="text-4xl font-bold mb-2">+1200</p>
                <p className="text-gray-400">happy users</p>
            </div>
            <div>
                <p className="text-4xl font-bold mb-2">95.3%</p>
                <p className="text-gray-400">increase in budgeting efficiency</p>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
            {[
                { name: 'Jenna M., Freelance Developer', img: '/img/Vr.jpg' },
                { name: 'Kofi B., Startup Founder', img: '/img/Vrfeel.jpg' },
                { name: 'Alex R., Product Designer', img: '/img/Vrtouch.jpg' }
            ].map((person) => (
                <div key={person.name} className="bg-[#1A1B25] p-6 rounded-2xl">
                    <div className='flex items-center text-yellow-400 mb-4'>
                        <img src={person.img} alt="testimonial" className="w-12 h-12 rounded-full mr-4 object-cover"/>
                        <div className="flex">
                            {Array.from({length: 5}).map((_, i) => (
                                <Star key={i}/>
                            ))}
                        </div>
                    </div>
                    <p className="font-bold mb-4">— {person.name}</p>
                    <p className="text-gray-400 italic">
                        "NeuraBank feels like having a CFO in my pocket"
                    </p>
                </div>
            ))}
        </div>
    </section>
</div>
);
}

export default Testimony;