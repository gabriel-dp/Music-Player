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
			justify-content: ${(props) => (props.$isLyricsOpen == "true" ? "flex-start" : "center")};
			padding: 1rem 0;
			align-items: center;
			min-height: 5rem;

			box-shadow: ${(props) => (props.$isLyricsOpen == "true" ? "#00000077 0 1rem 1rem -1.25rem;" : "none")};

			& > * {
				transition: none;
			}

			.image {
				width: ${(props) => (props.$isLyricsOpen == "true" ? "3rem" : "100%")};
			}
		}

		.lyrics {
			height: ${(props) => (props.$isLyricsOpen == "true" ? 100 : 0)}%;
			padding: ${(props) => (props.$isLyricsOpen == "true" ? "1.5rem" : 0)} 0;
		}
	}
`;

export const DataContainer = styled.div.attrs({
	className: "data",
})`
	grid-area: data;

	max-height: min-content;
	flex: 1;
	width: 100%;
	padding-bottom: 1rem;
	white-space: nowrap;
	overflow: hidden;

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
	overflow-y: auto;
	padding: 2rem;

	* {
		transition: none;
	}

	.current {
		font-weight: bold;
		color: blue;
	}

	.normal {
	}
`;

export const ControlsContainer = styled.div.attrs({
	className: "controls",
})`
	grid-area: controls;

	width: 100%;
	min-height: 7rem;
	padding: 1rem 0;
	box-shadow: #00000077 0 -1rem 1rem -1.25rem;
`;
