import { convertToTime } from "@/utils/timeUtils";
import { Slider, TimeContainer, TimeSliderContainer } from "./styles";

interface TimeSliderI {
	currentTime: number;
	duration: number;
	setTime: (time: number) => void;
}

export default function TimeSlider(props: TimeSliderI) {
	const checkNaN = (value: number): number => (!Number.isNaN(value) ? value : 0);

	function handleTimeChange(event: React.ChangeEvent<HTMLInputElement>) {
		const time = parseFloat(event.target.value) * checkNaN(props.duration) * 0.01;
		props.setTime(time);
	}

	return (
		<TimeSliderContainer>
			<Slider
				min={0}
				max={100}
				step={0.25}
				value={checkNaN(props.currentTime / props.duration) * 100}
				onChange={handleTimeChange}
				aria-label="time-slider"
			/>
			<TimeContainer>
				<p>{convertToTime(checkNaN(props.currentTime))}</p>
				<p>{convertToTime(checkNaN(props.duration))}</p>
			</TimeContainer>
		</TimeSliderContainer>
	);
}
