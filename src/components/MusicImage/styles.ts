import styled from "styled-components";

export const ImageContainer = styled.div.attrs({
	className: "image",
})<{ $src: string | undefined }>`
	height: 100%;
	width: 100%;
	max-width: 100vmin;
	max-height: 100vmin;
	transition: none;

	display: flex;
	align-items: center;
	justify-content: center;

	background-image: url(${(props) => props.$src});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: 50%;
`;
