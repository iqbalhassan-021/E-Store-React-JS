import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProductsPage from './pages/Products';
import BlogPage from './pages/Blog';
import LoginPage from './pages/Login';
import AdminPage from './pages/Admin';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/About' element={<AboutPage/>}/>
    <Route path='/Contact' element={<ContactPage/>}/>
    <Route path='/Products' element={<ProductsPage/>}/>
    <Route path='/Blog' element={<BlogPage/>}/>
    <Route path='/Login' element={<LoginPage/>}/>
    <Route path='/Admin' element={<AdminPage/>}/>
    <Route path='*' element={<ErrorPage/>}/>
    </Routes>


    </Router>
  );
}

export default App;
