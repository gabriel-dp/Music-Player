import { useEffect, useState } from "react";
import {
	FaCirclePause as Pause,
	FaCirclePlay as Play,
	FaBackwardStep as Previous,
	FaForwardStep as Next,
	FaAlignCenter as Lyrics,
	FaX as Close,
	FaMoon as Dark,
	FaSun as Light,
} from "react-icons/fa6";

import { TbRepeat as LoopOn, TbRepeatOff as LoopOff } from "react-icons/tb";

import { ButtonsContainer, ButtonsRow } from "./styles";

interface MusicControlsI {
	isPlaying: boolean;
	togglePlaying: () => void;
	isLyricsOpen: boolean;
	setIsLyricsOpen: (value: React.SetStateAction<boolean>) => void;
	reset: () => void;
	loop: boolean;
	toggleLoop: () => void;
	darkMode: boolean;
	toggleDarkMode: () => void;
}

export default function MusicControls(props: MusicControlsI) {
	const [showLyricsButton, setShowLyricsButton] = useState(false);

	function handleLyricsToggle() {
		props.setIsLyricsOpen((state) => !state);
	}

	useEffect(() => {
		function updateSize() {
			setShowLyricsButton(window.innerWidth < 768);
		}
		updateSize();

		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	return (
		<ButtonsContainer>
			<ButtonsRow>
				<button onClick={props.toggleDarkMode} aria-label="toggle-theme">
					{props.darkMode ? <Dark className="icon" /> : <Light className="icon" />}
				</button>
				<button onClick={props.reset} aria-label="previous">
					<Previous className="icon" />
				</button>
				<button className="main" onClick={props.togglePlaying} aria-label="pause/play">
					{props.isPlaying ? <Pause className="icon" /> : <Play className="icon" />}
				</button>
				<button className="disabled" aria-label="next">
					<Next className="icon" />
				</button>
				<button onClick={props.toggleLoop} aria-label="loop">
					{props.loop ? <LoopOn className="icon" /> : <LoopOff className="icon" />}
				</button>
			</ButtonsRow>
			{showLyricsButton && (
				<ButtonsRow>
					<button className="text" onClick={handleLyricsToggle}>
						{props.isLyricsOpen ? "Fechar" : "Mostrar"} Letra
						{props.isLyricsOpen ? <Close className="icon" /> : <Lyrics className="icon" />}
					</button>
				</ButtonsRow>
			)}
		</ButtonsContainer>
	);
}
