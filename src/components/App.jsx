import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Layout from './Layout/Layout.jsx';
import LoginPage from '../pages/LoginPage';
import Registration from '../pages/Registration';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileThunk } from 'redux/profile/thunk.profile.js';
import { selectAuth } from 'redux/auth/selector.auth.js';
import { token as tokenUrl } from 'http/http.js';
import PrivatRoute from './PrivatRoute/index.js';
import PublicRoute from './PublicRoute/index.js';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactPage = lazy(() => import('pages/ContactPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { token, status } = useSelector(selectAuth);

  if (token !== '') {
    tokenUrl.set(token);
  }

  useEffect(() => {
    if (status) {
      dispatch(getProfileThunk());
    }
  }, [dispatch, status]);

  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/" element={<PrivatRoute />}>
            <Route path="/contacts" element={<ContactPage />} />
          </Route>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<Registration />} />
          </Route>
        </Route>
        <Route path="*" element={<Layout />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};
