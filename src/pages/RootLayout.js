import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { UserAuth } from '../context/AuthContext';
const RootLayout = () => {
  return (
    <div>
      <div className="wrapper">
        <NavBar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

export function UseprotectedRoute({ children }) {
  const { user } = UserAuth();
  const navigate = useNavigate();
  if (!user) {
    return navigate('/');
  } else {
    return children;
  }
}
