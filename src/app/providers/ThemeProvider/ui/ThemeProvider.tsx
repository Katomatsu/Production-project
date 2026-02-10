import { FC, useMemo, useState } from "react";
import { ThemeContext, LOCAL_STORAGE_THEME_KEY, Theme } from "../lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeContextProvider: FC = ({
	children
}) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const toggleTheme = () => {
		const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
		setTheme(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	};

	const defaultProps = useMemo(() => {
		return { theme, toggleTheme }
	}, [theme])

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
