import { useCallback, useEffect, useMemo, useState } from "react";

import { Music } from "@/types/music";

interface useMusicPlayerReturn {
	music: Music | undefined;
	isPlaying: boolean;
	pause: () => void;
	resume: () => void;
	togglePlaying: () => void;
	setMusic: (music: Music) => void;
	duration: number;
	currentTime: number;
	setTime: (time: number) => void;
}

export default function useMusicPlayer(initialMusic?: Music): useMusicPlayerReturn {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [music, setMusic] = useState<Music | undefined>(initialMusic);

	const [currentTime, setCurrentTime] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);

	const audio = useMemo(() => {
		const instance = new Audio(music?.audio);
		instance.preload = "metadata";
		return instance;
	}, [music]);

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

	// Change current time
	const setTime = (time: number) => {
		audio.currentTime = time;
		setCurrentTime(time);
	};

	// Handles the end of the audio
	useEffect(() => {
		function end() {
			setIsPlaying(false);
		}

		audio.addEventListener("ended", end);
		return () => {
			audio.removeEventListener("ended", end);
		};
	}, [audio]);

	// Updates the current time
	useEffect(() => {
		if (!isPlaying) return;

		const interval = setInterval(() => {
			setCurrentTime(audio.currentTime);
		}, 250);
		return () => clearInterval(interval);
	}, [audio, isPlaying]);

	useEffect(() => {
		function updateDuration() {
			setDuration(audio.duration);
		}

		audio.addEventListener("loadedmetadata", updateDuration);
		return () => {
			audio.removeEventListener("loadedmetadata", updateDuration);
		};
	}, [audio]);

	return {
		music,
		isPlaying,
		pause,
		resume,
		togglePlaying,
		setMusic,
		duration,
		currentTime,
		setTime,
	};
}
