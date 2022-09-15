import 'modern-normalize';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicRoute } from 'hocs/PublicRoute';
import { PrivateRoute } from 'hocs/PrivateRoute';
import { LoaderSpiner } from 'components/Loader/Loader';

const AppBar = lazy(() => import('layouts/AppBar'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const Home = lazy(() => import('pages/Home'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    <Suspense fallback={<LoaderSpiner />}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route
            index
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute restricted>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
