import { StyledProvider } from '@merge/design-system';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CookiesProvider } from 'react-cookie';
import { Router } from './router';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <CookiesProvider>
      <StyledProvider>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <RouterProvider router={Router} />
      </StyledProvider>
    </CookiesProvider>
  );
}
