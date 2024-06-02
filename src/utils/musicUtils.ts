import { Stanza, Verse } from "@/types/music";

export const generateVerse = (start: number, text: string): Verse => ({
	start,
	text,
});

export const generateStanza = (time: number[], ...verses: string[]): Stanza => {
	if (time.length != verses.length) {
		return [generateVerse(0, "ERROR, CHECK THE LYRICS FILE")];
	}

	return verses.map((verse, i) => generateVerse(time[i], verse));
};
