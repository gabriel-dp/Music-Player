import { Lyrics, Music, MusicData } from "@/types/music";
import { generateStanza, generateVerse } from "@/utils/musicUtils";
import audio from "@/data/example.mp3";

const data: MusicData = {
	author: ["Padre Marcelo Rossi"],
	title: "Erguei As Mãos",
	album: "Paz sim, Violência Não",
	year: 2008,
	genre: "Gospel",
};

const ERGUEI_AS_MAOS = (...time: number[]) =>
	generateStanza(
		time,
		"Erguei as mãos e dai glória a Deus",
		"Erguei as mãos e dai glória a Deus",
		"Erguei as mãos",
		"E cantai como os filhos do Senhor"
	);

const ANIMAIZINHOS = (animal1: string, animal2: string, ...time: number[]) =>
	generateStanza(
		time,
		"Os animaizinhos subiram de dois em dois",
		"Os animaizinhos subiram de dois em dois",
		`${animal1.charAt(0).toUpperCase() + animal1.slice(1)}`,
		`E ${animal2}, como os filhos do Senhor`
	);

const DEUS_DISSE = (...time: number[]) =>
	generateStanza(
		time,
		"Deus disse a Noé: Constrói uma arca",
		"Deus disse a Noé: Constrói uma arca",
		"Que seja feita",
		"De madeira para os filhos do Senhor"
	);

const SENHOR_TEM_FILHOS = (...time: number[]) =>
	generateStanza(
		time,
		"O senhor tem muitos filhos",
		"Muitos filhos ele tem",
		"Eu sou um deles, você também",
		"Louvemos ao senhor"
	);

const STRINGS = [
	"Braço direito",
	", braço esquerdo",
	"Perna direita",
	", perna esquerda",
	"Balança a cabeça",
	", dá uma voltinha",
	"Dá um pulinho",
	" e abraça o irmão",
];
const CORPO = (stage: number, ...time: number[]) => {
	const verses: string[] = [];

	for (let i = 0; i <= stage; i++) {
		if (i != stage && i % 2 == 0) continue;
		const line = i % 2 == 0 ? STRINGS[i] : STRINGS[i - 1] + STRINGS[i];
		verses.push(line);
	}

	return generateStanza(time, ...verses);
};

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
	CORPO(0, 153.5),
	SENHOR_TEM_FILHOS(155, 158, 161, 165),
	CORPO(1, 167.5),
	SENHOR_TEM_FILHOS(169.5, 173, 176, 179.5),
	CORPO(2, 182.25, 184),
	SENHOR_TEM_FILHOS(185, 188.5, 192, 195.5),
	CORPO(3, 198, 199.75),
	SENHOR_TEM_FILHOS(201.5, 205, 208, 212),
	CORPO(4, 214.5, 216, 217.5),
	SENHOR_TEM_FILHOS(219, 222.5, 225.5, 229),
	CORPO(5, 232, 233.5, 235),
	SENHOR_TEM_FILHOS(237.5, 240.5, 243.5, 246.5),
	CORPO(6, 249, 250.5, 252, 253.5),
	SENHOR_TEM_FILHOS(254.5, 257.5, 260, 263.25),
	CORPO(7, 265.5, 267, 268.5, 269.25),
	[generateVerse(271, "♫")],
];

export const example: Music = {
	data,
	lyrics,
	audio,
	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWeOjZKhn5HzMYjUVM6VZopmx8ShhDqX-v_A&s",
};
