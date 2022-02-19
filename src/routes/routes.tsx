import LayoutPage from '@/layouts';
import About from '@/pages/About';
import Article from '@/pages/Article';
import Comments from '@/pages/Comments';
import Home from '@/pages/Home';
import { RouteObject, useRoutes } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'article',
        element: <Article />,
      },
      {
        path: 'comments',
        element: <Comments />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
];

export const App = () => {
  return useRoutes(routes);
};
