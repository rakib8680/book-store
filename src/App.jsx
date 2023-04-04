import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>This is app</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default App;