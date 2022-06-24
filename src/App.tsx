import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from 'pages/Main';
import Error from 'pages/Error';

import Test from 'pages/Test';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/test' element={<Test />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
