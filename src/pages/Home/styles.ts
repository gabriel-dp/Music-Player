import styled from "styled-components";

export const Background = styled.div`
	width: 100%;
	height: 100dvh;
	padding: 0 1.5rem;
	background-color: #ccc;
`;

export const MusicPlayerContainer = styled.div<{ $isLyricsOpen: string }>`
	width: min(100%, 75rem);
	height: 100%;
	margin: auto;
	border: 1px solid blue;

	display: grid;
	grid-template-areas:
		"data lyrics"
		"controls controls";
	grid-template-rows: 1fr min-content;
	grid-template-columns: 1fr 1fr;

	* {
		transition: all 0.75s ease-in-out;
	}

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;

		.data {
			flex-direction: ${(props) => (props.$isLyricsOpen == "true" ? "row" : "column")};
			justify-content: flex-start;
			align-items: center;
		}

		.lyrics {
			height: ${(props) => (props.$isLyricsOpen == "true" ? 100 : 0)}%;
		}
	}
`;

export const DataContainer = styled.div.attrs({
	className: "data",
})`
	grid-area: data;

	min-height: 5rem;
	max-height: min-content;
	flex: 1;
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	border: 1px solid green;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
`;

export const LyricsContainer = styled.div.attrs({
	className: "lyrics",
})`
	grid-area: lyrics;

	width: 100%;
	height: 100%;
	border: 1px solid red;
`;

export const ControlsContainer = styled.div.attrs({
	className: "controls",
})`
	grid-area: controls;

	width: 100%;
	min-height: 7rem;
	border: 1px solid yellow;
`;
