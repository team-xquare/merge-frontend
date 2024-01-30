import { createBrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/index';
import { Main } from './pages/Main';
import { Project } from './pages/Projects/Project';
import { MyProject } from './pages/Projects/MyProject';
import { Sign } from './pages/Sign';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'sign',
        element: <Sign />,
      },
      {
        path: 'project',
        children: [
          {
            index: true,
            element: <Project />,
          },
          {
            path: 'my',
            element: <MyProject />,
          },
        ],
      },
    ],
  },
]);
