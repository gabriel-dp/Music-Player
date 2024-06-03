import { Slider, TimeContainer, TimeSliderContainer } from "./styles";

export default function TimeSlider() {
	return (
		<TimeSliderContainer>
			<Slider min={0} max={100} step={0.25} defaultValue={0} />
			<TimeContainer>
				<p>0:00</p>
				<p>1:23</p>
			</TimeContainer>
		</TimeSliderContainer>
	);
}
