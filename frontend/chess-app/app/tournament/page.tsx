"use client";

import React, { useState } from "react";

const tournaments = [
    {
        id: 1,
        title: "2nd SkillCraft International Below 1800 Classical",
        date: "27th to 29th March 2026",
        location: "Thyagraj Sports Complex, Delhi",
        prizePool: "₹15,00,000",
        pdfLink: "https://drive.google.com/file/d/1vqs1dUhKVghx-l-HnULDXnib8NIJG2d8/view?usp=share_link",
        details: [
            { label: "Prizes", value: "Over 100 cash prizes, 125+ trophies. 1st Top 5: ₹1,11,000, 2nd ₹70,000, 3rd ₹50,000." },
            { label: "System of Play", value: "FIDE Swiss System with 9 rounds." },
            { label: "Time Control", value: "30 Mins + 30 Secs increment." },
            { label: "Eligibility", value: "Max rating 1799 in last 36 months. Unrated eligible." },
            { label: "Entry Fee", value: "₹5,500 (Late fee ₹500 from March 21)." },
            { label: "Reporting Time", value: "09:00 AM on 27th March 2026." },
            { label: "Contact", value: "Teamskillcraft@skillcraft.co.in" }
        ]
    },
    {
        id: 2,
        title: "2nd Grand RCC FIDE Rated Chess Festival",
        date: "March 27 to April 1, 2026",
        location: "St. Theresas School, Mangalore",
        prizePool: "₹14,00,001",
        pdfLink: "https://drive.google.com/file/d/1tPNySFOzX_TTJiuYNo8wj-uCMPpNr-06/view?usp=share_link",
        details: [
            { label: "Events", value: "Classical, Rapid A, Blitz A & B, Chess 960, Puzzle Solving." },
            { label: "Classical Dates", value: "March 27 to April 1." },
            { label: "Entry Fee", value: "Combo fee ₹5,500. Free for GMs/IMs/WGMs/WIMs." },
            { label: "Grand Prix Prize", value: "₹4,00,000 based on points across all 6 tournaments." },
            { label: "Accommodation", value: "Free dormitory for playing 5+ events (book by Mar 25)." },
            { label: "Special", value: "Free Gala Dinner Party for all on March 29." }
        ]
    }
];

export default function TournamentPage() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        if (expandedId === id) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
        }
    };

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
                    {tournaments.map((tournament) => (
                        <div
                            key={tournament.id}
                            className={`bg-[#1a1c20] p-8 rounded-2xl border ${expandedId === tournament.id ? "border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]" : "border-white/10 hover:border-emerald-500/30"} transition-all duration-500 relative overflow-hidden flex flex-col`}
                        >
                            {/* Decorative gradient blob */}
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-emerald-500/10 blur-2xl transition-all pointer-events-none"></div>

                            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                                {tournament.title}
                            </h3>
                            <div className="space-y-3 mb-6 relative z-10 text-sm md:text-base">
                                <div className="flex items-center text-gray-400">
                                    <svg className="w-5 h-5 mr-3 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    {tournament.date}
                                </div>
                                <div className="flex items-center text-gray-400">
                                    <svg className="w-5 h-5 mr-3 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    {tournament.location}
                                </div>
                                <div className="flex items-center text-gray-400">
                                    <svg className="w-5 h-5 mr-3 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    Prize Pool: <span className="text-white font-semibold ml-1">{tournament.prizePool}</span>
                                </div>
                            </div>

                            {/* Details Toggle Button */}
                            <button
                                onClick={() => toggleExpand(tournament.id)}
                                className="text-sm font-semibold text-emerald-500 hover:text-emerald-400 flex items-center gap-1 mb-4 relative z-10 transition-colors w-max"
                            >
                                {expandedId === tournament.id ? "Show less details" : "Read more details"}
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${expandedId === tournament.id ? "rotate-180" : ""}`}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Expandable Details Section */}
                            <div className={`overflow-hidden transition-all duration-500 relative z-10 ${expandedId === tournament.id ? "max-h-[600px] opacity-100 mb-6" : "max-h-0 opacity-0"}`}>
                                <div className="bg-white/5 rounded-xl p-4 md:p-5 space-y-3 border border-white/5">
                                    {tournament.details.map((detail, idx) => (
                                        <div key={idx} className="flex flex-col sm:flex-row sm:gap-2">
                                            <span className="text-emerald-500 font-semibold text-sm shrink-0">{detail.label}:</span>
                                            <span className="text-gray-300 text-sm whitespace-pre-wrap">{detail.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto relative z-10 w-full pt-4">
                                <a
                                    href={tournament.pdfLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 px-4 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white rounded-xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                                >
                                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                    View & Download PDF
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
