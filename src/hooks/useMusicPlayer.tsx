import { useCallback, useEffect, useMemo, useState } from "react";

import { Music } from "@/types/music";

interface useMusicPlayerReturn {
	music: Music | undefined;
	isPlaying: boolean;
	pause: () => void;
	play: () => void;
	togglePlaying: () => void;
	setMusic: (music: Music) => void;
	duration: number;
	currentTime: number;
	setTime: (time: number) => void;
}

export default function useMusicPlayer(initialMusic: Music | undefined, loop: boolean): useMusicPlayerReturn {
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
		audio.pause();
	}, [audio]);
	const play = useCallback(() => {
		audio.play();
	}, [audio]);
	const togglePlaying = () => (isPlaying ? pause() : play());

	// Change current time
	const setTime = useCallback(
		(time: number) => {
			audio.currentTime = time;
			setCurrentTime(time);
		},
		[audio]
	);

	// Handles the end of the audio
	useEffect(() => {
		function end() {
			if (loop) {
				setTime(0);
				play();
			} else {
				setIsPlaying(false);
			}
		}

		audio.addEventListener("ended", end);
		return () => {
			audio.removeEventListener("ended", end);
		};
	}, [audio, loop, setTime, play]);

	// Updates the current isPlaying state based on audio
	useEffect(() => {
		function playing(state: boolean) {
			setIsPlaying(state);
		}

		audio.addEventListener("play", () => playing(true));
		audio.addEventListener("pause", () => playing(false));
		return () => {
			audio.removeEventListener("play", () => playing(true));
			audio.removeEventListener("pause", () => playing(false));
		};
	}, [audio]);

	// Updates the current time based on audio
	useEffect(() => {
		function updateTime() {
			setCurrentTime(audio.currentTime);
		}

		audio.addEventListener("timeupdate", updateTime);
		return () => {
			audio.removeEventListener("timeupdate", updateTime);
		};
	}, [audio]);

	// Set duration after audio metadata loads
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
		play,
		togglePlaying,
		setMusic,
		duration,
		currentTime,
		setTime,
	};
}
