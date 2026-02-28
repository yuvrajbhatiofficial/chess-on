export default function Hero() {
    return (
        <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1c20] to-[#0f1012] dark:from-[#1a1c20] dark:to-[#0f1012] from-white to-gray-100 -z-10" />
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-emerald-500/20 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto z-10 flex flex-col items-center gap-6">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white dark:text-white text-gray-900">
                    Chess-On <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 text-3xl md:text-5xl mt-4 block">
                        India's Free Chess Powerhouse
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 dark:text-gray-400 text-gray-600 max-w-2xl leading-relaxed">
                    Unlock pro training, tournaments, and gear—all for ₹0. No logins, no catch. Train like a GM from your room and crush your next local or national chess events.
                </p>

                <ul className="text-left text-gray-300 dark:text-gray-300 text-gray-700 space-y-3 mt-4 text-sm md:text-base bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <li className="flex items-center gap-3">
                        <span className="text-emerald-500">❖</span> 1,000+ puzzles
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-emerald-500">❖</span> Videos from Top creators and players
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-emerald-500">❖</span> Best and Selected tournament calendar
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-emerald-500">❖</span> Chess gear shopping
                    </li>
                </ul>

                <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                    <a
                        href="/puzzles"
                        className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-all transform hover:-translate-y-1"
                    >
                        Start Solving
                    </a>
                    <a
                        href="/tournament"
                        className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white dark:text-white text-gray-900 border border-white/10 dark:border-white/10 border-gray-300 font-bold rounded-lg backdrop-blur-sm transition-all"
                    >
                        Join Tournament
                    </a>
                </div>
            </div>
        </section>
    );
}
