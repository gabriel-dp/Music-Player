import styled from "styled-components";

export const HeaderContainer = styled.header`
	height: min(100%, 3rem);
	width: 100%;
	padding: 0.75rem 0;
	border-bottom: 1px solid ${(props) => props.theme.text}22;

	display: flex;
	align-items: center;
	justify-content: center;

	a {
		height: 100%;

		img {
			max-height: 100%;
		}
	}
`;
