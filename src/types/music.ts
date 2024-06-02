export interface MusicData {
	title: string;
	author: string[];
	album: string;
	year: number;
	genre: string;
}

export type Verse = {
	start: number;
	text: string;
};
export type Stanza = Verse[];
export type Lyrics = Stanza[];

export interface Music {
	data: MusicData;
	audio: string;
	image: string;
	lyrics: Lyrics;
}
