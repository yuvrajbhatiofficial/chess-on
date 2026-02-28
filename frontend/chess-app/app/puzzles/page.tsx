import { promises as fs } from 'fs';
import path from 'path';
import PuzzleGame from '../components/PuzzleGame';

export default async function PuzzlesPage() {
    const filePath = path.join(process.cwd(), 'public', 'puzzleData.json');

    let puzzles = [];
    try {
        const fileContents = await fs.readFile(filePath, 'utf8');
        puzzles = JSON.parse(fileContents);
    } catch (e) {
        console.error("Failed to load puzzles", e);
    }

    return (
        <PuzzleGame puzzles={puzzles} />
    );
}
