import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';
import Loader from './Loader/index.js';
import Layout from './Layout/Layout.jsx';
import HomePage from 'pages/HomePage';
import ContactPage from 'pages/ContactPage';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/contacts" element={<ContactPage />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Suspense>
    </BrowserRouter>
  );
};
