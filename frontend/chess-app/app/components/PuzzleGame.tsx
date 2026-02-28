"use client";

import { useState, useCallback, useEffect } from "react";
import Puzzle from "./Puzzle";

interface PuzzleData {
    PuzzleId: string;
    FEN: string;
    Moves: string;
    Rating: number;
    Themes: string;
}

export default function PuzzleGame({ puzzles }: { puzzles: PuzzleData[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    // Prevent scrolling when on puzzle page
    useEffect(() => {
        setIsMounted(true);
        if (puzzles.length > 0) {
            setCurrentIndex(Math.floor(Math.random() * puzzles.length));
        }

        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";

        // Also handle iOS Safari overscroll
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
        document.body.style.height = "100%";

        return () => {
            document.body.style.overflow = originalStyle;
            document.body.style.position = "";
            document.body.style.width = "";
            document.body.style.height = "";
        };
    }, [puzzles.length]);

    const handleNext = useCallback(() => {
        if (puzzles.length > 0) {
            setCurrentIndex(Math.floor(Math.random() * puzzles.length));
        }
    }, [puzzles.length]);

    if (!isMounted) return null;

    const currentPuzzle = puzzles[currentIndex];

    return (
        <div className="flex flex-col items-center justify-center h-[100dvh] w-full bg-gradient-to-br from-[#1a1c20] to-[#0f1012] text-white p-2 md:p-4 overflow-hidden">
            <div className="w-full max-w-4xl flex flex-col items-center gap-2 md:gap-8 h-full">
                <header className="w-full flex gap-4 justify-between items-center shrink-0 pt-2 md:pt-4 px-4 z-10">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-emerald-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
                            </svg>
                        </div>
                        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Tactics</h1>
                    </div>
                    <button
                        onClick={handleNext}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white/70 bg-white/5 hover:bg-white/10 hover:text-white rounded-full transition-all duration-300 border border-white/5 hover:border-white/20 backdrop-blur-md shadow-lg"
                    >
                        <span>Skip Puzzle</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" /><path d="m17 18 0-12" />
                        </svg>
                    </button>
                </header>

                <main className="w-full flex-1 flex flex-col items-center justify-center min-h-0">
                    {currentPuzzle ? (
                        <Puzzle
                            puzzle={currentPuzzle}
                            onComplete={() => { }}
                            onFail={() => { }}
                            onSkip={handleNext}
                        />
                    ) : (
                        <div>Loading puzzles...</div>
                    )}
                </main>
            </div>
        </div>
    );
}


