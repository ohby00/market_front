import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './component/Appbar';
import HomePage from './component/HomePage';
import HomePage_login from './component/HomePage_login';
import LoginPage from './component/LoginPage';
import JoinPage from './component/JoinPage';
import AdminPage from './component/AdminPage';

function App() {
  return (
    <div>
      <AppBar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<JoinPage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
