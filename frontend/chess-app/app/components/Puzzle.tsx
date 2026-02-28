"use client";

import { useState, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

// Define drag types locally since imports are tricky
type DraggingPieceDataType = {
    isSparePiece: boolean;
    position: string;
    pieceType: string;
};

type PieceDropHandlerArgs = {
    piece: DraggingPieceDataType;
    sourceSquare: string;
    targetSquare: string | null;
};

interface PuzzleData {
    PuzzleId: string;
    FEN: string;
    Moves: string;
    Rating: number;
    Themes: string;
}

interface PuzzleProps {
    puzzle: PuzzleData;
    onComplete: () => void;
    onFail: () => void;
    onSkip: () => void;
}

export default function Puzzle({ puzzle, onComplete, onFail, onSkip }: PuzzleProps) {
    const [game, setGame] = useState(new Chess());
    const [puzzleMoves, setPuzzleMoves] = useState<string[]>([]);
    const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
    const [moveHistory, setMoveHistory] = useState<{ san: string, isComputer: boolean }[]>([]);
    const [status, setStatus] = useState<"idle" | "correct" | "wrong" | "solved">("idle");
    const [orientation, setOrientation] = useState<"white" | "black">("white");
    const [moveFrom, setMoveFrom] = useState<string | null>(null);
    const [optionSquares, setOptionSquares] = useState<Record<string, React.CSSProperties>>({});

    // Initialize game when puzzle changes
    useEffect(() => {
        if (!puzzle) return;

        const newGame = new Chess(puzzle.FEN);
        setGame(newGame);

        // Moves are space separated string
        const moves = puzzle.Moves.split(" ");
        setPuzzleMoves(moves);
        setCurrentMoveIndex(0);
        setMoveHistory([]);
        setStatus("idle");
        setMoveFrom(null);
        setOptionSquares({});

        // Determine turn
        const turn = newGame.turn();
        setOrientation(turn === 'w' ? 'black' : 'white');

        // Make the first move automatically with a slower delay (1000ms)
        setTimeout(() => {
            safeMakeMove(moves[0]);
            setCurrentMoveIndex(1);
        }, 1000);

    }, [puzzle]);

    const safeMakeMove = (moveSanOrLan: string) => {
        setGame((g) => {
            const clone = new Chess(g.fen());
            let moveResult = null;
            try {
                const from = moveSanOrLan.substring(0, 2);
                const to = moveSanOrLan.substring(2, 4);
                const promotion = moveSanOrLan.length > 4 ? moveSanOrLan.substring(4, 5) : undefined;

                moveResult = clone.move({ from, to, promotion: promotion || 'q' });
            } catch (e) {
                try {
                    moveResult = clone.move(moveSanOrLan);
                } catch (e2) {
                    console.warn("Invalid move:", moveSanOrLan);
                }
            }

            if (moveResult) {
                // Determine whose move this is by checking the active orientation vs the color of the move
                // 'w' for white, 'b' for black.
                const isComputerMove = moveResult.color === (orientation === 'white' ? 'b' : 'w');

                setMoveHistory(prev => {
                    // Prevent duplicate consecutive moves (Strict mode hack)
                    if (prev.length > 0 && prev[prev.length - 1].san === moveResult.san) {
                        return prev;
                    }
                    return [...prev, { san: moveResult.san, isComputer: isComputerMove }];
                });
            }
            return clone;
        });
    };

    const handlePlayerMove = (sourceSquare: string, targetSquare: string, pieceTypeStr?: string) => {
        if (status === "solved") return false;

        const expectedMove = puzzleMoves[currentMoveIndex];
        if (!expectedMove) return false;

        let isPromotion = false;
        if (pieceTypeStr) {
            isPromotion = (pieceTypeStr[1] === 'P' && (targetSquare[1] === '8' || targetSquare[1] === '1'));
        } else {
            const p = game.get(sourceSquare as any);
            isPromotion = p?.type === 'p' && (targetSquare[1] === '8' || targetSquare[1] === '1');
        }

        const promotionChar = isPromotion ? 'q' : undefined;
        const attemptedMoveUci = sourceSquare + targetSquare + (promotionChar || "");

        if (attemptedMoveUci !== expectedMove) {
            console.log(`Wrong move. Expected ${expectedMove}, got ${attemptedMoveUci}`);
            setStatus("wrong");
            setTimeout(() => setStatus("idle"), 1000);
            onFail();
            return false;
        }

        // Correct move!
        safeMakeMove(expectedMove);
        const nextIndex = currentMoveIndex + 1;
        setCurrentMoveIndex(nextIndex);
        setStatus("correct");

        // Opponent's next move
        if (nextIndex < puzzleMoves.length) {
            setTimeout(() => {
                const opponentMove = puzzleMoves[nextIndex];
                safeMakeMove(opponentMove);
                const nextNextIndex = nextIndex + 1;
                setCurrentMoveIndex(nextNextIndex);

                if (nextNextIndex >= puzzleMoves.length) {
                    setStatus("solved");
                    onComplete();
                } else {
                    setStatus("idle");
                }
            }, 1000);
        } else {
            setStatus("solved");
            onComplete();
        }

        return true;
    };

    // Correct signature for this react-chessboard version
    const onDrop = (args: PieceDropHandlerArgs) => {
        const { sourceSquare, targetSquare, piece } = args;

        if (!targetSquare) return false;

        setMoveFrom(null);
        setOptionSquares({});

        const pieceChar = piece.pieceType;
        if (typeof pieceChar !== 'string') return false;

        return handlePlayerMove(sourceSquare, targetSquare, pieceChar);
    };

    function getMoveOptions(square: string) {
        const moves = game.moves({
            square: square as any,
            verbose: true
        }) as any[];

        if (moves.length === 0) {
            setOptionSquares({});
            return false;
        }

        const newSquares: Record<string, React.CSSProperties> = {};
        moves.map((move) => {
            const isCapture = game.get(move.to as any) && game.get(move.to as any)?.color !== game.get(square as any)?.color;
            newSquares[move.to] = {
                background: isCapture
                    ? "radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)"
                    : "radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)",
                borderRadius: "50%"
            };
        });
        newSquares[square] = {
            background: "rgba(255, 255, 0, 0.4)"
        };
        setOptionSquares(newSquares);
        return true;
    }

    function onSquareClick(args: any) {
        if (status === "solved") return;

        const square = typeof args === 'string' ? args : args.square;
        if (!square) return;

        // Player's turn is only when it matches board orientation but puzzle game logic handles turn enforcing anyway.

        if (!moveFrom) {
            const hasMoveOptions = getMoveOptions(square);
            if (hasMoveOptions) setMoveFrom(square);
            return;
        }

        if (!optionSquares[square]) {
            const hasMoveOptions = getMoveOptions(square);
            setMoveFrom(hasMoveOptions ? square : null);
            return;
        }

        handlePlayerMove(moveFrom, square);
        setMoveFrom(null);
        setOptionSquares({});
    }

    return (
        <div className="flex flex-col items-center gap-2 md:gap-4 w-full h-full justify-center select-none touch-none">
            {/* Top Info Pill */}
            <div className="flex w-full max-w-full sm:max-w-[600px] justify-between items-end px-2 sm:px-0 -mb-2 md:-mb-3 z-10 w-full relative">

                {/* Moves History Floating Above Board */}
                <div className="flex gap-1.5 items-center overflow-x-auto whitespace-nowrap hide-scrollbar pb-1 max-w-[65%]">
                    {moveHistory.map((move, i) => (
                        <span key={i} className={`px-2 py-1 text-xs md:text-sm font-bold rounded-md shadow-sm border border-white/5 ${move.isComputer
                            ? "bg-indigo-500/20 text-indigo-300" // Primary/Computer color
                            : "bg-emerald-500/20 text-emerald-400" // User color
                            }`}>
                            {move.san}
                        </span>
                    ))}
                    {status !== "solved" && moveHistory.length > 0 && (
                        <span className="px-2 py-1 text-xs md:text-sm font-bold rounded-md bg-white/5 text-white/50 animate-pulse border border-white/5 shadow-sm">
                            ...
                        </span>
                    )}
                </div>

                {puzzle && (
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest">Rating</span>
                        <span className="font-mono font-bold text-sm md:text-base text-yellow-400">{puzzle.Rating}</span>
                    </div>
                )}
            </div>

            <div className="w-full max-w-full sm:max-w-[600px] max-h-[60vh] sm:max-h-full aspect-square shadow-[0_0_40px_rgba(0,0,0,0.3)] rounded-md sm:rounded-xl overflow-hidden border border-white/10 bg-[#1a1c20] relative touch-none flex-shrink z-20">
                <Chessboard
                    options={{
                        position: game.fen(),
                        onPieceDrop: onDrop,
                        boardOrientation: orientation,
                        darkSquareStyle: { backgroundColor: "#779556" },
                        lightSquareStyle: { backgroundColor: "#ebecd0" },
                        animationDurationInMs: 300,
                        showNotation: true,
                        allowDragging: true,
                        canDragPiece: () => true,
                        onSquareClick: onSquareClick,
                        squareStyles: optionSquares
                    }}
                />

                {/* Minimal Feedback Overlay */}
                {status === "correct" && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                        <div className="bg-green-500/10 w-full h-full animate-pulse opacity-50" />
                    </div>
                )}
                {status === "wrong" && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                        <div className="bg-red-500/20 w-full h-full animate-pulse opacity-50" />
                    </div>
                )}

                {/* Next Puzzle Button popup overlay */}
                {status === "solved" && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] rounded-md sm:rounded-xl">
                        <button
                            onClick={onSkip}
                            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold shadow-2xl animate-bounce transition-all"
                        >
                            Next Puzzle
                        </button>
                    </div>
                )}
            </div>

            {/* Bottom Info Spacer */}
            <div className="flex w-full max-w-full sm:max-w-[600px] justify-between items-start px-2 sm:px-0 -mt-2 md:-mt-3 z-10 w-full mb-8">
                <div className="flex-1" />
            </div>
        </div>
    );
}
