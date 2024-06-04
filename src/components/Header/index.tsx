import logo from "@/assets/logo.svg";

import { HeaderContainer } from "./styles";

export default function Header() {
	const link = "https://gabriel-dp.github.io";

	return (
		<HeaderContainer>
			<a href={link} target="_blank">
				<img src={logo} alt="gabriel-dp" />
			</a>
		</HeaderContainer>
	);
}
