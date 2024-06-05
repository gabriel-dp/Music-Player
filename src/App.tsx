import { ThemeProvider } from "styled-components";

import Home from "@/pages/Home";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import GlobalStyle from "@/styles/global";
import { LightTheme } from "@/styles/themes/themeLight";
import { DarkTheme } from "@/styles/themes/themeDark";
import { darkThemePreferred } from "./utils/browserUtils";

export interface AppConfigs {
	darkMode: boolean;
	loop: boolean;
}

export interface AppEditConfigs {
	toggleDarkMode: () => void;
	toggleLoop: () => void;
}

export default function App() {
	const [configs, setConfigs] = useLocalStorage<AppConfigs>("music-player-configs", {
		darkMode: darkThemePreferred(),
		loop: true,
	});

	const theme = configs.darkMode ? DarkTheme : LightTheme;

	function toggleDarkMode() {
		setConfigs((prev) => ({ ...prev, darkMode: !prev.darkMode }));
	}

	function toggleLoop() {
		setConfigs((prev) => ({ ...prev, loop: !prev.loop }));
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle theme={theme} />
			<Home configs={configs} editConfigs={{ toggleDarkMode, toggleLoop }} />
		</ThemeProvider>
	);
}
