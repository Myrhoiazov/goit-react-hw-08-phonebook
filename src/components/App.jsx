import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, useEffect } from 'react';
import Loader from './Loader/index.js';
import Layout from './Layout/Layout.jsx';
import HomePage from 'pages/HomePage';
import ContactPage from 'pages/ContactPage';
import LoginPage from '../pages/LoginPage';
import Registration from '../pages/Registration';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileThunk } from 'redux/profile/thunk.profile.js';
import { selectAuth } from 'redux/auth/selector.auth.js';
import { token as tokenUrl } from 'http/http.js';

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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<Registration />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Suspense>
    </BrowserRouter>
  );
};
