import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='container mx-auto'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;