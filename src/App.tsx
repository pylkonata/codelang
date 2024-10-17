import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Home } from './pages/home';
import { RegistrationPage } from './pages/registration-page';

function App() {
  return (
    <div className='light h-screen w-screen m-auto flex flex-col justify-center items-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='/login' element={<div>Login page</div>} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
