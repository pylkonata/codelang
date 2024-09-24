import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/signup' element={<SignUp />} /> */}
      {/* <Route path='/login' element={<Login />} /> */}
      <Route path='*' element={<div>404</div>} />
    </Routes>
  );
}

export default App;
