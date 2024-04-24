import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './component/Header/Appbar';
import Home from './component/pages/Home';
import Login from './component/pages/Login';
import Join from './component/pages/Join';

function App() {
  return (
    <div>
      <AppBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Join />}/>
      </Routes>
    </div>
  );
}

export default App;
