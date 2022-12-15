import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import Post from './pages/posts/Post';
import Recuitment from './pages/recuitment/Recuitment';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Post />} />
        <Route path='/recuitment' element={<Recuitment />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
