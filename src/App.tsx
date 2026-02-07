import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Suspense } from 'react';
import { useThemeContext } from './theme/ThemeContext';
import './styles/index.scss';
import { classNames } from './helpers/classNames/classNames';



export const App = () => {
	const {theme, toggleTheme} = useThemeContext()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Switch theme</button>
			<div>
				<Link to={'/'}>MainPage</Link>
				<Link to={'/about'}>AboutPage</Link>
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/about" element={<AboutPageAsync />} />
					<Route path="/" element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};
