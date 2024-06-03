import styled from "styled-components";

export const ImageContainer = styled.div<{ $src: string | undefined }>`
	height: 100%;
	aspect-ratio: 1;
	border: 1px solid green;
	max-width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	&::after {
		content: "";
		display: block;
		width: 100%;
		padding-bottom: 100%;
		border: 1px solid purple;

		background-image: url(${(props) => props.$src});
		background-repeat: no-repeat;
		background-size: contain;
	}
`;
