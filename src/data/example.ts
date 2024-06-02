import { Lyrics, Music, MusicData } from "@/types/music";
import { generateStanza, generateVerse } from "@/utils/musicUtils";

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
	ERGUEI_AS_MAOS(0, 0, 0, 0),
	ANIMAIZINHOS("o elefante", "os passarinhos", 0, 0, 0, 0),
	ANIMAIZINHOS("a minhoquinha", "os pinguins", 0, 0, 0, 0),
	ANIMAIZINHOS("o canguru", "o sapinho", 0, 0, 0, 0),
	DEUS_DISSE(0, 0, 0, 0),
	[generateVerse(0, "Por isso...!")],
	ERGUEI_AS_MAOS(0, 0, 0, 0),
	ERGUEI_AS_MAOS(0, 0, 0, 0),
	ERGUEI_AS_MAOS(0, 0, 0, 0),
	[generateVerse(0, "E atenção agora, porque")],
	SENHOR_TEM_FILHOS(0, 0, 0, 0),
	CORPO(0, 0),
	SENHOR_TEM_FILHOS(0, 0, 0, 0),
	CORPO(1, 0),
	SENHOR_TEM_FILHOS(0, 0, 0, 0),
	CORPO(2, 0, 0),
	SENHOR_TEM_FILHOS(0, 0, 0, 0),
	CORPO(3, 0, 0),
	SENHOR_TEM_FILHOS(0, 0, 0, 0),
	CORPO(4, 0, 0, 0),
	SENHOR_TEM_FILHOS(0, 0, 0, 0),
	CORPO(5, 0, 0, 0),
	SENHOR_TEM_FILHOS(0, 0, 0, 0),
	CORPO(6, 0, 0, 0, 0),
	SENHOR_TEM_FILHOS(0, 0, 0, 0),
	CORPO(7, 0, 0, 0, 0),
];

export const music: Music = {
	data,
	lyrics,
	audio: "",
	image: "",
};
