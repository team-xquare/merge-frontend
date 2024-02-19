import { createBrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/index';
import { Main } from './pages/Main';
import { Project } from './pages/Project';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Registration } from './pages/Registration';
import { MyPage } from './pages/MyPage';

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
        path: 'project/:id',
        element: <Project />,
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
        path: 'register',
        element: <Registration />,
      },
      {
        path: 'deploy/:id',
        element: <Registration />,
      },
      {
        path: 'my',
        element: <MyPage />,
      },
    ],
    errorElement: <>error</>,
  },
]);
