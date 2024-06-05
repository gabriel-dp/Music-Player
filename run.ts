// Data structures
type Verse = {
	start: number;
	text: string;
};
type Stanza = Verse[];
type Lyrics = Stanza[];

// Basic functions to deal with the data structures
const generateVerse = (start: number, text: string): Verse => ({
	start,
	text,
});
const generateStanza = (time: number[], ...text: string[]): Stanza => {
	if (time.length != text.length || time.length == 0) {
		return [generateVerse(0, "ERROR, CHECK THE LYRICS FILE")];
	}

	const stanza = text.map((text, i) => generateVerse(time[i], text));
	return stanza;
};

// Lyrics functions
const ERGUEI_AS_MAOS = (...time: number[]): Stanza => {
	const repeat = "Erguei as mãos e dai glória a Deus";
	return generateStanza(time, repeat, repeat, "Erguei as mãos", "E cantai como os filhos do Senhor");
};

const ANIMAIZINHOS = (animal1: string, animal2: string, ...time: number[]): Stanza => {
	const repeat = "Os animaizinhos subiram de dois em dois";
	const capitalizedAnimal1 = `${animal1.charAt(0).toUpperCase() + animal1.slice(1)}`;
	return generateStanza(time, repeat, repeat, capitalizedAnimal1, `E ${animal2}, como os filhos do Senhor`);
};

const DEUS_DISSE = (...time: number[]): Stanza => {
	const repeat = "Deus disse a Noé: Constrói uma arca";
	return generateStanza(time, repeat, repeat, "Que seja feita", "De madeira para os filhos do Senhor");
};

const SENHOR_TEM_FILHOS = (...time: number[]): Stanza =>
	generateStanza(
		time,
		"O senhor tem muitos filhos",
		"Muitos filhos ele tem",
		"Eu sou um deles, você também",
		"Louvemos ao senhor"
	);

const STAGES = [
	"Braço direito",
	", braço esquerdo",
	"Perna direita",
	", perna esquerda",
	"Balança a cabeça",
	", dá uma voltinha",
	"Dá um pulinho",
	" e abraça o irmão",
];
const INCREMENTAL = (stage: number, ...time: number[]): Stanza => {
	const verses: string[] = [];

	for (let i = 0; i <= stage; i++) {
		if (i != stage && i % 2 == 0) continue; // Check if it is the final stage or end of the line
		const line = i % 2 == 0 ? STAGES[i] : STAGES[i - 1] + STAGES[i];
		verses.push(line);
	}

	return generateStanza(time, ...verses);
};

// Generate full lyrics
const lyrics: Lyrics = [
	[generateVerse(1, "♫")],
	ERGUEI_AS_MAOS(22.5, 26, 29.5, 31.5),
	ANIMAIZINHOS("o elefante", "os passarinhos", 38, 41.5, 45, 47.5),
	ANIMAIZINHOS("a minhoquinha", "os pinguins", 52, 55.5, 59, 61),
	ANIMAIZINHOS("o canguru", "o sapinho", 66, 69.5, 73, 75),
	DEUS_DISSE(80, 83.5, 87, 89),
	[generateVerse(93, "Por isso...!")],
	ERGUEI_AS_MAOS(95, 99, 102.5, 105),
	ERGUEI_AS_MAOS(111, 114.5, 118, 120),
	ERGUEI_AS_MAOS(127, 130, 134, 136),
	[generateVerse(139.5, "E atenção agora, porque")],
	SENHOR_TEM_FILHOS(141, 144, 147.5, 151),
	INCREMENTAL(0, 153.5),
	SENHOR_TEM_FILHOS(155, 158, 161, 165),
	INCREMENTAL(1, 167.5),
	SENHOR_TEM_FILHOS(169.5, 173, 176, 179.5),
	INCREMENTAL(2, 182.25, 184),
	SENHOR_TEM_FILHOS(185, 188.5, 192, 195.5),
	INCREMENTAL(3, 198, 199.75),
	SENHOR_TEM_FILHOS(201.5, 205, 208, 212),
	INCREMENTAL(4, 214.5, 216, 217.5),
	SENHOR_TEM_FILHOS(219, 222.5, 225.5, 229),
	INCREMENTAL(5, 232, 233.5, 235),
	SENHOR_TEM_FILHOS(237.5, 240.5, 243.5, 246.5),
	INCREMENTAL(6, 249, 250.5, 252, 253.5),
	SENHOR_TEM_FILHOS(254.5, 257.5, 260, 263.25),
	INCREMENTAL(7, 265.5, 267, 268.5, 269.25),
	[generateVerse(271, "♫")],
];

// Print lyrics
console.log("\n");
lyrics.forEach((stanza) => {
	stanza.forEach((verse) => {
		console.log(verse.text);
	});
	console.log("\n");
});
