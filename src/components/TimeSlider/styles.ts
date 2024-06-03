import styled from "styled-components";

export const TimeSliderContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const Slider = styled.input.attrs({
	type: "range",
})`
	width: 100%;
`;

export const TimeContainer = styled.div`
	width: 100%;
	font-size: 0.75rem;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
