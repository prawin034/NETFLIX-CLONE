//BROWSER ROUTER

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import HomePage from './pages/Home';
import RootLayout, { UseprotectedRoute } from './pages/RootLayout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/signin', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
      {
        path: '/account',
        element: (
          <UseprotectedRoute>
            <Account />
          </UseprotectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
