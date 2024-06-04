import styled from "styled-components";

export const ButtonsContainer = styled.div`
	width: 87.5%;
	margin: 0 auto;
	padding-bottom: 1rem;

	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const ButtonsRow = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-evenly;

	button {
		padding: 0.5rem;
		border-radius: 100rem;
		border: none;
		background-color: transparent;
		cursor: pointer;

		display: flex;
		align-items: center;
		justify-content: center;

		.icon {
			font-size: 1.25rem;
		}
	}

	.main {
		.icon {
			font-size: 2.5rem;
		}
	}

	.text {
		border: 1px solid #000;
		padding: 0.5rem 1rem;

		&:hover {
			background-color: #000;
			color: #fff;
		}

		.icon {
			font-size: 0.75rem;
			margin-left: 0.5rem;
		}
	}
`;
