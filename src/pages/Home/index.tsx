import { useState, Fragment } from "react";

import useMusicPlayer from "@/hooks/useMusicPlayer";
import { isCurrentVerse } from "@/utils/lyricsUtils";
import TimeSlider from "@/components/TimeSlider";
import MusicImage from "@/components/MusicImage";
import MusicControls from "@/components/MusicControls";
import Header from "@/components/Header";
import { example } from "@/data/example";

import {
	Background,
	ControlsContainer,
	DataContainer,
	HeaderContainer,
	LyricsContainer,
	MusicPlayerContainer,
} from "./styles";

interface HomeI {
	darkMode: boolean;
	toggleDarkMode: () => void;
}

export default function Home(props: HomeI) {
	const [isLyricsOpen, setIsLyricsOpen] = useState(false);
	const [loop, setLoop] = useState(true);
	const { music, ...controls } = useMusicPlayer(example, loop);

	function toggleLoop() {
		setLoop((state) => !state);
	}

	function reset() {
		controls.setTime(0);
	}

	return (
		<Background>
			<MusicPlayerContainer $isLyricsOpen={isLyricsOpen.toString()}>
				<HeaderContainer>
					<Header />
				</HeaderContainer>
				<DataContainer>
					<MusicImage src={music?.image} alt="Album image" />
					<div className="text">
						<h2 className="title">{music?.data.title}</h2>
						<p className="author">{music?.data.author.join(" | ")}</p>
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
						reset={reset}
						toggleLoop={toggleLoop}
						loop={loop}
						darkMode={props.darkMode}
						toggleDarkMode={props.toggleDarkMode}
					/>
				</ControlsContainer>
			</MusicPlayerContainer>
		</Background>
	);
}
