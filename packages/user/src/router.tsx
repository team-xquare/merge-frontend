import { createBrowserRouter } from 'react-router-dom';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <></>,
    children: [
      {
        path: '',
        element: <></>,
      },
    ],
  },
]);
