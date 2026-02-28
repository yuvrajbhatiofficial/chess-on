import Image from "next/image";

export default function About() {
    return (
        <section className="py-24 px-4 w-full bg-[#0f1012] border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            About <span className="text-emerald-500">Us</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Founded by Aayush Choudhary—a 17-year-old competitive chess player. Chess-On is India's first completely free chess training platform. No logins, no payments, no barriers.
                        </p>

                        <h3 className="text-2xl font-bold text-white pt-4">Our Mission</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Chess-On is Built for every chess player. We have top creator videos, tournament registrations, chess gear shopping, and training tools—all in one place to help you win your next local/national tournament.
                        </p>

                        <h3 className="text-2xl font-bold text-white pt-4">Why We Exist</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Traditional chess training costs ₹5000+ monthly. Chess-On gives you pro-level resources for ₹0. From a student's hostel room to serving thousands of Indian players by March 2026. Join the Movement.
                        </p>
                    </div>

                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500 group">
                        <Image
                            src="/founder.jpeg"
                            alt="Aayush Choudhary - Founder of Chess-On"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Name Overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0f1012] via-[#0f1012]/60 to-transparent pointer-events-none flex flex-col items-center justify-end pb-8 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/20 tracking-[0.2em] transform translate-y-2 group-hover:-translate-y-1 transition-transform duration-500">
                                AAYUSH
                            </span>
                            <span className="text-emerald-400 text-sm md:text-base font-semibold tracking-widest uppercase mt-1 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 drop-shadow-lg">
                                - Founder of Chess-On
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
