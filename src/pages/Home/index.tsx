import { music } from "@/data/example";

export default function Home() {
	music.lyrics.forEach((stanza) => {
		stanza.forEach((verse) => {
			console.log(verse.text);
		});
		console.log("\n");
	});

	return <p>Home</p>;
}
