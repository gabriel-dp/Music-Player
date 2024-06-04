import { Lyrics, Stanza, Verse } from "@/types/music";

export const generateVerse = (start: number, text: string): Verse => ({
	start,
	text,
});

export const generateStanza = (time: number[], ...text: string[]): Stanza => {
	if (time.length != text.length || time.length == 0) {
		return [generateVerse(0, "ERROR, CHECK THE LYRICS FILE")];
	}

	const stanza = text.map((text, i) => generateVerse(time[i], text));
	return stanza;
};

export function isCurrentVerse(lyrics: Lyrics, currentTime: number, verseIndex: number, stanzaIndex: number): boolean {
	// Check if the current verse start has not been reached
	const currentVerse = lyrics[stanzaIndex][verseIndex];
	if (currentTime < currentVerse.start) return false;

	// Check if there is a next verse and if its start has not been reached
	const nextVerse = lyrics[stanzaIndex][verseIndex + 1];
	if (nextVerse) return currentTime < nextVerse.start;

	// Check if there is a next stanza and if its first verse start has not been reached
	const nextStanza = lyrics[stanzaIndex + 1];
	if (nextStanza) return currentTime < nextStanza[0].start;

	// The current verse is the last one
	return true;
}
