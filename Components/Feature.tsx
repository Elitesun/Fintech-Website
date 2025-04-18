import { Box, Sparkles, Brain, Wallet, BarChart as ChartBar, Shield, Zap, Clock } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const Feature = () => {
return (
<div className="relative overflow-hidden">
    <BackgroundEffects />
    {/* Features Section */}
    <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">What we do</h2>
        <p className="text-center text-gray-400 mb-12 sm:mb-16 px-4">
            NeuraBank combines deep learning, behavioral finance, and beautiful UX
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto sm:auto-rows-[180px]">
            <div
                className="col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 bg-gradient-to-br from-purple-900/40 to-purple-800/40 p-6 sm:p-8 rounded-3xl backdrop-blur-xl border border-purple-500/10 hover:border-purple-500/20 transition-all group">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-3 sm:mb-4 group-hover:text-purple-300 transition-colors" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Predictive Wealth Planning</h3>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
                    Our AI algorithms analyze market trends, personal spending patterns, and global economic indicators
                    to create a personalized wealth growth strategy that evolves with you.
                </p>
            </div>

            <div
                className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 p-4 sm:p-6 rounded-3xl backdrop-blur-xl border border-blue-500/10 hover:border-blue-500/20 transition-all group">
                <Brain className="w-6 h-6 text-blue-400 mb-3 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-lg font-bold mb-2">AI Insights</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    Real-time market analysis
                </p>
            </div>

            <div
                className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/40 p-4 sm:p-6 rounded-3xl backdrop-blur-xl border border-emerald-500/10 hover:border-emerald-500/20 transition-all group">
                <Wallet className="w-6 h-6 text-emerald-400 mb-3 group-hover:text-emerald-300 transition-colors" />
                <h3 className="text-lg font-bold mb-2">Smart Savings</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    Automated saving strategies
                </p>
            </div>

            <div
                className="col-span-2 bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 p-4 sm:p-6 rounded-3xl backdrop-blur-xl border border-indigo-500/10 hover:border-indigo-500/20 transition-all group">
                <ChartBar className="w-6 h-6 text-indigo-400 mb-3 group-hover:text-indigo-300 transition-colors" />
                <h3 className="text-lg font-bold mb-2">Portfolio Optimization</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    AI-driven investment rebalancing for optimal returns
                </p>
            </div>

            <div
                className="bg-gradient-to-br from-rose-900/40 to-rose-800/40 p-4 sm:p-6 rounded-3xl backdrop-blur-xl border border-rose-500/10 hover:border-rose-500/20 transition-all group">
                <Shield className="w-6 h-6 text-rose-400 mb-3 group-hover:text-rose-300 transition-colors" />
                <h3 className="text-lg font-bold mb-2">Risk Protection</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    Advanced security
                </p>
            </div>

            <div
                className="bg-gradient-to-br from-amber-900/40 to-amber-800/40 p-4 sm:p-6 rounded-3xl backdrop-blur-xl border border-amber-500/10 hover:border-amber-500/20 transition-all group">
                <Clock className="w-6 h-6 text-amber-400 mb-3 group-hover:text-amber-300 transition-colors" />
                <h3 className="text-lg font-bold mb-2">24/7 Monitoring</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    Continuous oversight
                </p>
            </div>

            <div
                className="col-span-2 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 p-4 sm:p-6 rounded-3xl backdrop-blur-xl border border-cyan-500/10 hover:border-cyan-500/20 transition-all group">
                <Zap className="w-6 h-6 text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors" />
                <h3 className="text-lg font-bold mb-2">Instant Insights</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    Real-time financial analytics and personalized recommendations
                </p>
            </div>
        </div>
    </section>
</div>
);
}

export default Feature;