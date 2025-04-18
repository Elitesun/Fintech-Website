const Pricing = () => {
return (
<div>
    {/* Pricing Section */}
    <section className="container mx-auto px-4 py-20" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">PRICING</h2>
        <div className="max-w-md mx-auto bg-[#1A1B25] p-8 rounded-2xl text-center" data-aos="zoom-in" data-aos-delay="200">
            <h3 className="text-2xl font-bold mb-2">Lifetime</h3>
            <p className="text-gray-400 mb-4">All you need for one simple monthly price.</p>
            <p className="text-gray-400 mb-8">Zero hidden fees. Just pure financial firepower.</p>
            <p className="text-5xl font-bold">500$</p>
        </div>
    </section>
</div>
);
}

export default Pricing;