import React from "react";

const videos = [
    {
        id: 1,
        title: "Beat the London system by GM Ankit Rajpara",
        videoId: "ZvvbdQDGvTo",
    },
    {
        id: 2,
        title: "UNLOCKING THE CHESS TACTICS-DOUBLE ATTACK",
        videoId: "322RMUZ0-sQ",
    },
    {
        id: 3,
        title: "HOW TO REACH 1500 RATING IN CHESS",
        videoId: "j760B_nBtUk",
    },
    {
        id: 4,
        title: "MAGNUS CARLSEN SECRET PAWN TRICK BY GM ANKIT RAJAPARA",
        videoId: "sKKrBBjnM4U",
    },
    {
        id: 5,
        title: "UNLOCKING THE CHESS TACTICS-DISCOVERED ATTACK",
        videoId: "X9UmtlYtDbM",
    },
    {
        id: 6,
        title: "HOW TO IMPROVE FROM 1500 TO 1800",
        videoId: "PwcwLhEyLT8",
    },
    {
        id: 7,
        title: "THINK LIKE A GRANDMASTER",
        videoId: "9dC8uZBMZJE",
    },
    {
        id: 8,
        title: "UNLOCKING CHESS TACTICS-FORK",
        videoId: "lvnQ_NFotgA",
    },
    {
        id: 9,
        title: "HOW TO IMPROVE FROM 1800 TO 2000",
        videoId: "i7Ihq8j82ro",
    },
    {
        id: 10,
        title: "TURNING WEAKNESS INTO WEAPON",
        videoId: "-I_F_13UlHI",
    },
    {
        id: 11,
        title: "HOW TO WIN QUEEN VS ROOK ENDGAME",
        videoId: "bonsWHN6OTU",
    },
    {
        id: 12,
        title: "HOW TO WIN AFTER BLUNDER",
        videoId: "guQIemFa9ZU",
    }
];

export default function VideosPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Premium Chess <span className="text-emerald-500">Content</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Watch masterclasses, game analysis, and strategy guides from top grandmasters right here.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="bg-[#1a1c20] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col"
                        >
                            <div className="relative w-full aspect-video">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={`https://www.youtube-nocookie.com/embed/${video.videoId}?playsinline=1&rel=0`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div className="p-5 flex-grow bg-gradient-to-t from-black/20 to-transparent">
                                <h3 className="text-lg font-bold text-white leading-tight">
                                    {video.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Partners Footer */}
                <div className="mt-24 border-t border-white/10 pt-16">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        Follow our <span className="text-emerald-500">video partners</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Chessneurons */}
                        <div className="bg-[#1a1c20] p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:border-emerald-500/30 transition-all">
                            <h3 className="text-xl font-bold text-white mb-6">Chessneurons</h3>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/chessneurons?igsh=MXhneDZxcXBrc3FmZbQ==" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-pink-500/10 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition-colors duration-300 font-medium text-sm flex items-center gap-2">
                                    Instagram
                                </a>
                                <a href="https://youtube.com/@chessneurons?si=DO0HbFfB59ursu-w" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-300 font-medium text-sm flex items-center gap-2">
                                    YouTube
                                </a>
                            </div>
                        </div>

                        {/* Suyog wagh */}
                        <div className="bg-[#1a1c20] p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:border-emerald-500/30 transition-all">
                            <h3 className="text-xl font-bold text-white mb-6">IM Suyog Wagh</h3>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/imsuyogwagh?igsh=cml3dndpNjM5eHl4" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-pink-500/10 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition-colors duration-300 font-medium text-sm flex items-center gap-2">
                                    Instagram
                                </a>
                                <a href="https://youtube.com/@imsuyogwagh?si=Yhm3mXBEMnDiAZub" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-300 font-medium text-sm flex items-center gap-2">
                                    YouTube
                                </a>
                            </div>
                        </div>

                        {/* LearnchesswithDimple */}
                        <div className="bg-[#1a1c20] p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:border-emerald-500/30 transition-all">
                            <h3 className="text-xl font-bold text-white mb-6">LearnchesswithDimple</h3>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/learnchesswithdimple?igsh=dXlieXpuZzFtZzZz" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-pink-500/10 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition-colors duration-300 font-medium text-sm flex items-center gap-2">
                                    Instagram
                                </a>
                                <a href="https://youtube.com/@learnchesswithdimple?si=MemdwjvsICXHXASK" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-300 font-medium text-sm flex items-center gap-2">
                                    YouTube
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
