import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/HomePage/Home';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path= '/profile' element={<Profile />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
