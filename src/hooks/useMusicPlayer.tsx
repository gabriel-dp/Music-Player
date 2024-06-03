import { useCallback, useEffect, useMemo, useState } from "react";

import { Music } from "@/types/music";

interface useMusicPlayerReturn {
	music: Music | undefined;
	isPlaying: boolean;
	pause: () => void;
	resume: () => void;
	togglePlaying: () => void;
	setMusic: (music: Music) => void;
}

export default function useMusicPlayer(initialMusic?: Music): useMusicPlayerReturn {
	const [isPlaying, setIsPlaying] = useState(false);
	const [music, setMusic] = useState<Music | undefined>(initialMusic);

	const audio = useMemo(() => new Audio(music?.audio), [music]);

	// Audio play/pause control
	const pause = useCallback(() => {
		setIsPlaying(false);
		audio.pause();
	}, [audio]);
	const resume = useCallback(() => {
		setIsPlaying(true);
		audio.play();
	}, [audio]);
	const togglePlaying = () => (isPlaying ? pause() : resume());

	// Handles the end of the audio
	useEffect(() => {
		audio.addEventListener("ended", () => setIsPlaying(false));
		return () => {
			audio.removeEventListener("ended", () => setIsPlaying(false));
		};
	}, [audio]);

	return { music, isPlaying, pause, resume, togglePlaying, setMusic };
}
