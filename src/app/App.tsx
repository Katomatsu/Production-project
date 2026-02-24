import './styles/index.scss';
import { Suspense } from 'react';
import { useThemeContext } from '~/app/providers/ThemeProvider';
import { classNames } from '~/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router/ui/AppRouter';
import { Navbar } from '~/widgets/Navbar';
import { Sidebar } from '~/widgets/Sidebar';

export function App() {
  const { theme } = useThemeContext();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">

        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
