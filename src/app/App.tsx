import './styles/index.scss';
import { useThemeContext } from '~/app/providers/ThemeProvider';
import './styles/index.scss';
import { classNames } from '~/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router/ui/AppRouter';
import { Navbar } from '~/widgets/Navbar';



export const App = () => {
	const { theme, toggleTheme } = useThemeContext()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
			<button onClick={toggleTheme}>Switch theme</button>
		</div>
	);
};

