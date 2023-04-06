import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/Header/Header';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
  // spinner implements 
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <div className='container mx-auto'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;