import { createBrowserRouter } from 'react-router-dom';
//import { Header } from './components/Header/index';
import { Main } from './pages/Main';
import { Project } from './pages/Projects/Project';
import { MyProject } from './pages/Projects/MyProject';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <>asd</>,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
      {
        path: 'signup',
        element: <SignUp />,
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
    errorElement: <>error</>,
  },
]);
