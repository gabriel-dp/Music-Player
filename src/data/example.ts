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
	ERGUEI_AS_MAOS(2, 5, 10, 15),
	ANIMAIZINHOS("o elefante", "os passarinhos", 20, 25, 30, 35),
	ANIMAIZINHOS("a minhoquinha", "os pinguins", 100000000, 100000000, 100000000, 100000000),
	ANIMAIZINHOS("o canguru", "o sapinho", 100000000, 100000000, 100000000, 100000000),
	DEUS_DISSE(100000000, 100000000, 100000000, 100000000),
	[generateVerse(100000000, "Por isso...!")],
	ERGUEI_AS_MAOS(100000000, 100000000, 100000000, 100000000),
	ERGUEI_AS_MAOS(100000000, 100000000, 100000000, 100000000),
	ERGUEI_AS_MAOS(100000000, 100000000, 100000000, 100000000),
	[generateVerse(100000000, "E atenção agora, porque")],
	SENHOR_TEM_FILHOS(100000000, 100000000, 100000000, 100000000),
	CORPO(0, 100000000),
	SENHOR_TEM_FILHOS(100000000, 100000000, 100000000, 100000000),
	CORPO(1, 100000000),
	SENHOR_TEM_FILHOS(100000000, 100000000, 100000000, 100000000),
	CORPO(2, 100000000, 100000000),
	SENHOR_TEM_FILHOS(100000000, 100000000, 100000000, 100000000),
	CORPO(3, 100000000, 100000000),
	SENHOR_TEM_FILHOS(100000000, 100000000, 100000000, 100000000),
	CORPO(4, 100000000, 100000000, 100000000),
	SENHOR_TEM_FILHOS(100000000, 100000000, 100000000, 100000000),
	CORPO(5, 100000000, 100000000, 100000000),
	SENHOR_TEM_FILHOS(100000000, 100000000, 100000000, 100000000),
	CORPO(6, 100000000, 100000000, 100000000, 100000000),
	SENHOR_TEM_FILHOS(100000000, 100000000, 100000000, 100000000),
	CORPO(7, 100000000, 100000000, 100000000, 100000000),
];

export const example: Music = {
	data,
	lyrics,
	audio,
	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWeOjZKhn5HzMYjUVM6VZopmx8ShhDqX-v_A&s",
};
