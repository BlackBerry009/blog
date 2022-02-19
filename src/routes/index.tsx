import { HashRouter } from 'react-router-dom';
import { ErrorBoundary } from '../layouts/components/ErrorBoundary';
import { App } from './routes';

export const RouterWrapper = () => {
  return (
    <ErrorBoundary>
        <HashRouter>
          <App />
        </HashRouter>
    </ErrorBoundary>
  );
}
