import styled from "styled-components";

export const Background = styled.div`
	width: 100%;
	height: 100dvh;
	padding: 0 1.5rem;
`;

export const MusicPlayerContainer = styled.div<{ $isLyricsOpen: string }>`
	width: min(100%, 75rem);
	height: 100%;
	margin: auto;

	display: grid;
	grid-template-areas:
		"head head"
		"data lyrics"
		"controls controls";
	grid-template-rows: min-content 1fr min-content;
	grid-template-columns: 1fr 1fr;

	.data,
	.lyrics,
	.head {
		transition: all 0.625s ease-in-out;
	}

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;

		.head {
			height: ${(props) => (props.$isLyricsOpen == "true" ? "0" : "3rem")};
		}

		.data {
			flex-direction: ${(props) => (props.$isLyricsOpen == "true" ? "row" : "column")};
			justify-content: ${(props) => (props.$isLyricsOpen == "true" ? "flex-start" : "center")};
			padding: 1rem 0;
			align-items: center;
			min-height: 5rem;

			.image {
				width: ${(props) => (props.$isLyricsOpen == "true" ? "3rem" : "100%")};
			}
		}

		.lyrics {
			transition: none;
			height: ${(props) => (props.$isLyricsOpen == "true" ? 100 : 0)}%;
			padding: ${(props) => (props.$isLyricsOpen == "true" ? "1.5rem" : 0)} 0;
		}

		.controls {
		}
	}
`;

export const HeaderContainer = styled.header.attrs({ className: "head" })`
	grid-area: head;

	height: 3rem;
	width: 100%;
	overflow: hidden;
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

	background: linear-gradient(${(props) => props.theme.background} 30%, rgba(255, 255, 255, 0)) center top,
		linear-gradient(rgba(255, 255, 255, 0), ${(props) => props.theme.background} 70%) center bottom,
		radial-gradient(farthest-side at 50% 0, ${(props) => props.theme.dark}44, rgba(0, 0, 0, 0)) center top,
		radial-gradient(farthest-side at 50% 100%, ${(props) => props.theme.dark}44, rgba(0, 0, 0, 0)) center bottom;

	background-repeat: no-repeat;
	background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
	background-attachment: local, local, scroll, scroll;

	* {
		transition: none;
	}

	.current {
		font-weight: bold;
		color: ${(props) => props.theme.primary};
	}

	.normal {
	}
`;

export const ControlsContainer = styled.div.attrs({
	className: "controls",
})`
	grid-area: controls;

	width: 100%;
	padding: 1rem 0;
`;
