import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Apply from './components/Apply';
import Register from './components/Register';
import Login from './components/Login';
import BlogDetails from './components/BlogDetails';
import Services from './components/Services';
import Contact from './Redux/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route path='/apply/:id' element={<Apply/>} />
          <Route  path='/register' element={<Register/>} />
          <Route  path='/login' element={<Login/>} />
          <Route  path='/services' element={<Services/>} />
          <Route  path='/contact' element={<Contact/>} />
          <Route  path='/blogDetails/:id' element={<BlogDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
