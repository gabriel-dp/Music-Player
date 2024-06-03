import useMusicPlayer from "@/hooks/useMusicPlayer";
import TimeSlider from "@/components/TimeSlider";
import MusicImage from "@/components/MusicImage";
import { example } from "@/data/example";

import { Background, ControlsContainer, DataContainer, LyricsContainer, MusicPlayerContainer } from "./styles";
import { useState } from "react";

export default function Home() {
	/*
	music.lyrics.forEach((stanza) => {
		stanza.forEach((verse) => {
			console.log(verse.text);
		});
		console.log("\n");
	});
	*/

	const [isLyricsOpen, setIsLyricsOpen] = useState(false);
	const { music, ...controls } = useMusicPlayer(example);

	return (
		<Background>
			<MusicPlayerContainer $isLyricsOpen={isLyricsOpen.toString()}>
				<DataContainer>
					<MusicImage src={music?.image} alt="Album image" />
					<div>
						<h2>{music?.data.title}</h2>
						<p>{music?.data.author.join(" | ")}</p>
					</div>
				</DataContainer>
				<LyricsContainer></LyricsContainer>
				<ControlsContainer>
					<TimeSlider />
					<button onClick={controls.togglePlaying}>{controls.isPlaying ? "Pause" : "Resume"}</button>
					<button onClick={() => setIsLyricsOpen((state) => !state)}>{isLyricsOpen ? "Close" : "Open"}</button>
				</ControlsContainer>
			</MusicPlayerContainer>
		</Background>
	);
}
