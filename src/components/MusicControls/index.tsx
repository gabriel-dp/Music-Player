import { useEffect, useState } from "react";
import {
	FaCirclePause as Pause,
	FaCirclePlay as Play,
	FaBackwardStep as Previous,
	FaForwardStep as Next,
	FaRepeat as Loop,
	FaRegHeart as Favorite,
	FaAlignCenter as Lyrics,
	FaX as Close,
} from "react-icons/fa6";

import { ButtonsContainer, ButtonsRow } from "./styles";

interface MusicControlsI {
	isPlaying: boolean;
	togglePlaying: () => void;
	isLyricsOpen: boolean;
	setIsLyricsOpen: (value: React.SetStateAction<boolean>) => void;
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
				<button>
					<Favorite className="icon" />
				</button>
				<button>
					<Previous className="icon" />
				</button>
				<button className="main" onClick={props.togglePlaying}>
					{props.isPlaying ? <Pause className="icon" /> : <Play className="icon" />}
				</button>
				<button>
					<Next className="icon" />
				</button>
				<button>
					<Loop className="icon" />
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
