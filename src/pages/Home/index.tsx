import { useState, Fragment } from "react";

import { Stanza, Verse } from "@/types/music";
import useMusicPlayer from "@/hooks/useMusicPlayer";
import TimeSlider from "@/components/TimeSlider";
import MusicImage from "@/components/MusicImage";
import { example } from "@/data/example";

import { Background, ControlsContainer, DataContainer, LyricsContainer, MusicPlayerContainer } from "./styles";

export default function Home() {
	const [isLyricsOpen, setIsLyricsOpen] = useState(false);
	const { music, ...controls } = useMusicPlayer(example);

	function isCurrentVerse(verse: Verse, nextVerse: Verse | undefined, nextStanza: Stanza | undefined): boolean {
		if (controls.currentTime < verse.start) return false;
		if (nextVerse && controls.currentTime < nextVerse.start) return true;
		if (!nextVerse && nextStanza && controls.currentTime < nextStanza[0].start) return true;
		return false;
	}

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
				<LyricsContainer>
					{music &&
						music.lyrics.map((stanza, i) => {
							return (
								<Fragment key={i}>
									{stanza.map((verse, j) => (
										<p
											className={isCurrentVerse(verse, stanza[j + 1], music.lyrics[i + 1]) ? "current" : "normal"}
											key={`${i}-${j}`}>
											{verse.text}
										</p>
									))}
									<br />
								</Fragment>
							);
						})}
				</LyricsContainer>
				<ControlsContainer>
					<TimeSlider currentTime={controls.currentTime} duration={controls.duration} setTime={controls.setTime} />
					<button onClick={controls.togglePlaying}>{controls.isPlaying ? "Pause" : "Resume"}</button>
					<button onClick={() => setIsLyricsOpen((state) => !state)}>{isLyricsOpen ? "Close" : "Open"}</button>
				</ControlsContainer>
			</MusicPlayerContainer>
		</Background>
	);
}
