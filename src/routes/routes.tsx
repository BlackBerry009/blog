import LayoutPage from '@/layouts';
import About from '@/pages/About';
import Article from '@/pages/Article';
import { Category } from '@/pages/Category';
import Comments from '@/pages/Comments';
import { Friends } from '@/pages/Friends';
import Home from '@/pages/Home';
import { UpdateLog } from '@/pages/UpdateLog';
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
        path: 'category',
        element: <Category />,
      },
      {
        path: 'article',
        element: <Article />,
      },
      {
        path: 'update-log',
        element: <UpdateLog />,
      },
      {
        path: 'comments',
        element: <Comments />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'friends',
        element: <Friends />,
      },
    ],
  },
];

export const App = () => {
  return useRoutes(routes);
};
