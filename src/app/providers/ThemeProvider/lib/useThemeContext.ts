import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const useThemeContext = () => {
	const themeContext = useContext(ThemeContext);

	if (!themeContext) console.warn('ThemeContext not found');

	return themeContext;
};
