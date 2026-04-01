import { Routes, Route } from 'react-router-dom';
import Navbar from './layouts/NavBar';
import Home from './pages/Home';
import Plates from './pages/Plates';
import PlateDetail from './pages/PlateDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plates" element={<Plates />} />
        <Route path="/plates/:id" element={<PlateDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
