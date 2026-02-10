import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPage } from '~/pages/AboutPage';
import { MainPage } from '~/pages/MainPage';
import { Suspense } from 'react';
import { useThemeContext } from '~/app/providers/ThemeProvider';
import './styles/index.scss';
import { classNames } from '~/shared/lib/classNames/classNames';



export const App = () => {
	const { theme, toggleTheme } = useThemeContext()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Switch theme</button>
			<div>
				<Link to={'/'}>MainPage</Link>
				<Link to={'/about'}>AboutPage</Link>
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/about" element={<AboutPage />} />
					<Route path="/" element={<MainPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};
