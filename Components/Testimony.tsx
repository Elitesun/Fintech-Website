import { InfiniteMovingCards } from './ui/infinite-moving-cards';
const Testimony = () => {
return (
<div className="overflow-x-hidden" id='about'>
    {/* Stats Section */}
    <section className="container mx-auto px-4 py-20" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-2" data-aos="fade-up">TESTIMONIALS / STATS</h2>
        <p className="text-center text-gray-400 mb-16" data-aos="fade-up" data-aos-delay="100">Why People Choose Us</p>

        <div className="grid grid-cols-2 gap-8 text-center mb-16">
            <div data-aos="fade-right" data-aos-delay="200">
                <p className="text-4xl font-bold mb-2">+1200</p>
                <p className="text-gray-400">happy users</p>
            </div>
            <div data-aos="fade-left" data-aos-delay="200">
                <p className="text-4xl font-bold mb-2">95.3%</p>
                <p className="text-gray-400">increase in budgeting efficiency</p>
            </div>
        </div>
        
        <InfiniteMovingCards direction="right" speed="slow" items={[ 
            <div key="1"             className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
>
            <div className="text-yellow-400 mb-2">★★★★★</div>
            <p className="text-gray-300">"Top-tier experience, will use again!"</p>
            <p className="mt-2 font-bold text-white">— Jenna M., Developer</p>
            </div>,
            <div key="2"             className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
>
                <div className="text-yellow-400 mb-2">★★★★★</div>
                <p className="text-gray-300">"Helped launch our MVP under a week!"</p>
                <p className="mt-2 font-bold text-white">— Kofi B., Founder</p>
            </div>,
            <div key="3"             className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
>
                <div className="text-yellow-400 mb-2">★★★★★</div>
                <p className="text-gray-300">"Helped me become more..!"</p>
                <p className="mt-2 font-bold text-white">— Alex R., Product Designer</p>
            </div>,
            ]}
        />
</section>
</div>
);
}

export default Testimony;