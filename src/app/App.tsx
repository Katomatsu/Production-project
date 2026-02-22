import './styles/index.scss';
import { useThemeContext } from '~/app/providers/ThemeProvider';
import './styles/index.scss';
import { classNames } from '~/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router/ui/AppRouter';
import { Navbar } from '~/widgets/Navbar';
import { ThemeSwitcher } from '~/shared/ui/ThemeSwitcher';



export const App = () => {
	const { theme} = useThemeContext()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
		</div>
	);
};

