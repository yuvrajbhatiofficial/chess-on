export default function Contact() {
    return (
        <section className="py-24 px-4 w-full bg-[#1a1c20] border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Get in <span className="text-emerald-500">Touch</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Questions about puzzles, tournaments, collaborations, or featuring your content? We're here to help!<br />
                    Respond Time: 48 hours or less.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 flex-wrap">

                    <a href="mailto:chesson0001@gmail.com" className="group flex flex-col items-center p-6 rounded-2xl bg-[#0f1012] border border-white/5 hover:border-emerald-500/50 transition-all w-60 hover:-translate-y-2">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        </div>
                        <h3 className="text-lg font-bold text-white">Email Us</h3>
                        <p className="text-gray-500 text-sm mt-2 break-all">chesson0001@gmail.com</p>
                    </a>

                    <a href="https://instagram.com/chesson_official" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-6 rounded-2xl bg-[#0f1012] border border-white/5 hover:border-pink-500/50 transition-all w-60 hover:-translate-y-2">
                        <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 mb-4 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </div>
                        <h3 className="text-lg font-bold text-white">Instagram</h3>
                        <p className="text-gray-500 text-sm mt-2">@chesson_official</p>
                    </a>

                    <a href="https://youtube.com/@chesson_official" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-6 rounded-2xl bg-[#0f1012] border border-white/5 hover:border-red-500/50 transition-all w-60 hover:-translate-y-2">
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                        </div>
                        <h3 className="text-lg font-bold text-white">YouTube</h3>
                        <p className="text-gray-500 text-sm mt-2">@chesson_official</p>
                    </a>
                </div>

                <p className="text-emerald-500 text-sm font-semibold tracking-wide mt-12 animate-pulse">
                    Follow: @chesson_official for all new updates!
                </p>
            </div>
        </section>
    );
}

