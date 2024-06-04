export function convertToTime(millis: number): string {
	const minutes = millis / 60;
	const mm = Math.floor(minutes);
	const ss = Math.floor(60 * (minutes - mm));
	const time = `${mm}:${ss.toString().padStart(2, "0")}`;
	return time;
}
