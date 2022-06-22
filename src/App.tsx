import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from 'pages/Main';
import Error from 'pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
