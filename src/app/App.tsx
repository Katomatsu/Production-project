import './styles/index.scss';
import { useThemeContext } from '~/app/providers/ThemeProvider';
import './styles/index.scss';
import { classNames } from '~/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router/ui/AppRouter';
import { Navbar } from '~/widgets/Navbar';
import { Sidebar } from '~/widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';


export const App = () => {
	const { theme } = useThemeContext()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback={''}>

				<Navbar />
				<div className='content-page'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

