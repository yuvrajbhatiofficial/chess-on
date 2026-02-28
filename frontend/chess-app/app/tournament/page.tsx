import React from "react";

const tournaments = [
    {
        id: 1,
        title: "Summer Classic 2026",
        date: "July 15-17, 2026",
        location: "Online",
        prizePool: "$5,000",
        pdfLink: "https://drive.google.com/file/d/1Cj7b_wO76gD_dummy_pdf/view?usp=sharing", // Replace with real Google Drive link
    },
    {
        id: 2,
        title: "Grandmaster Invitational",
        date: "August 20-22, 2026",
        location: "New York, NY",
        prizePool: "$20,000",
        pdfLink: "https://drive.google.com/file/d/1Xz9a_qR54yN_dummy_pdf/view?usp=sharing",
    },
    {
        id: 3,
        title: "Beginner's Open",
        date: "September 5, 2026",
        location: "Online",
        prizePool: "$1,000",
        pdfLink: "https://drive.google.com/file/d/1Bt8c_mP32xL_dummy_pdf/view?usp=sharing",
    }
];

export default function TournamentPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Upcoming <span className="text-emerald-500">Tournaments</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Compete against the best, test your skills, and win prizes. Download the official tournament details below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tournaments.map((tournament) => (
                        <div
                            key={tournament.id}
                            className="bg-[#1a1c20] p-8 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
                        >
                            {/* Decorative gradient blob */}
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>

                            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                                {tournament.title}
                            </h3>
                            <div className="space-y-3 mb-8 relative z-10">
                                <div className="flex items-center text-gray-400">
                                    <svg className="w-5 h-5 mr-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    {tournament.date}
                                </div>
                                <div className="flex items-center text-gray-400">
                                    <svg className="w-5 h-5 mr-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    {tournament.location}
                                </div>
                                <div className="flex items-center text-gray-400">
                                    <svg className="w-5 h-5 mr-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    Prize Pool: <span className="text-white font-semibold ml-1">{tournament.prizePool}</span>
                                </div>
                            </div>

                            <a
                                href={tournament.pdfLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 px-4 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white rounded-xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] relative z-10"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                View & Download Info
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
