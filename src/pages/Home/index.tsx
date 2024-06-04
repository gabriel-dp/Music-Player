import { useState, Fragment } from "react";

import useMusicPlayer from "@/hooks/useMusicPlayer";
import { isCurrentVerse } from "@/utils/lyricsUtils";
import TimeSlider from "@/components/TimeSlider";
import MusicImage from "@/components/MusicImage";
import { example } from "@/data/example";

import { Background, ControlsContainer, DataContainer, LyricsContainer, MusicPlayerContainer } from "./styles";
import MusicControls from "@/components/MusicControls";

export default function Home() {
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
				<LyricsContainer>
					{music &&
						music.lyrics.map((stanza, i) => {
							return (
								<Fragment key={i}>
									{stanza.map((verse, j) => (
										<p
											key={`${i}-${j}`}
											className={isCurrentVerse(music.lyrics, controls.currentTime, j, i) ? "current" : "normal"}>
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
					<MusicControls
						isPlaying={controls.isPlaying}
						togglePlaying={controls.togglePlaying}
						isLyricsOpen={isLyricsOpen}
						setIsLyricsOpen={setIsLyricsOpen}
					/>
				</ControlsContainer>
			</MusicPlayerContainer>
		</Background>
	);
}
