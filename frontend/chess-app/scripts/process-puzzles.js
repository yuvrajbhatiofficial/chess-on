const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, '../public/puzzleData.json');
const outputFile = path.join(__dirname, '../public/puzzleData.json');

try {
    const rawData = fs.readFileSync(inputFile, 'utf8');
    const jsonRows = JSON.parse(rawData);

    const cleanData = [];

    // Start from index 1 to skip header
    // Limit to 1000 puzzles
    for (let i = 1; i < jsonRows.length; i++) {
        if (cleanData.length >= 1000) break;

        const row = jsonRows[i];
        if (!row || row.length === 0) continue;

        // Join the jagged array parts with space to reconstruct the line, 
        // but knowing that the original CSV was likely split by spaces incorrectly.
        // However, we discovered that:
        // PuzzleId,FEN (comma separated) -> was split by space? NO. 
        // "PuzzleId,FENPart1" is the first element.
        // So the structure was preserved somewhat.
        // The safest bet is: join with SPACE, then split by COMMA.

        // Filter out empty strings from the end
        const meaningfulParts = row.filter(p => p !== null && p !== undefined && p !== "");
        const joinedLine = meaningfulParts.join(" ");

        // Split by comma to get the CSV columns
        // Note: FEN itself uses spaces, but is one CSV column. 
        // puzzleId,FEN,Moves,Rating,Deviation,Popularity,NbPlays,Themes,GameUrl,OpeningTags
        // If we split by comma:
        // 0: PuzzleId
        // 1: FEN
        // 2: Moves
        // 3: Rating
        // ...

        const columns = joinedLine.split(',');

        if (columns.length < 9) {
            console.warn(`Skipping malformed row ${i}:`, shortened(joinedLine));
            continue;
        }

        const puzzle = {
            PuzzleId: columns[0].trim(),
            FEN: columns[1].trim(),
            Moves: columns[2].trim(), // Space separated moves
            Rating: parseInt(columns[3].trim()),
            RatingDeviation: parseInt(columns[4].trim()),
            Popularity: parseInt(columns[5].trim()),
            NbPlays: parseInt(columns[6].trim()),
            Themes: columns[7].trim(),
            GameUrl: columns[8].trim(),
            // OpeningTags might be the rest or empty
            OpeningTags: columns[9] ? columns[9].trim() : ""
        };

        cleanData.push(puzzle);
    }

    console.log(`Processed ${cleanData.length} puzzles.`);
    fs.writeFileSync(outputFile, JSON.stringify(cleanData, null, 2));
    console.log(`Wrote clean data to ${outputFile}`);

} catch (err) {
    console.error("Error processing puzzles:", err);
    process.exit(1);
}

function shortened(str) {
    return str.length > 50 ? str.substring(0, 47) + "..." : str;
}
