import { useState } from "react";
import { ThemeProvider } from "styled-components";

import Home from "@/pages/Home";
import GlobalStyle from "@/styles/global";
import { LightTheme } from "@/styles/themes/themeLight";
import { DarkTheme } from "./styles/themes/themeDark";

export default function App() {
	const [darkMode, setDarkMode] = useState(false);
	const theme = darkMode ? DarkTheme : LightTheme;

	function toggleDarkMode() {
		setDarkMode((state) => !state);
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle theme={theme} />
			<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
		</ThemeProvider>
	);
}
