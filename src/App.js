import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './component/header/Appbar';
import Home from './component/pages/Home';
import Login from './component/pages/Login';
import Join from './component/pages/Join';
import User from './component/pages/User';
import MyPage from './component/pages/MyPage';
import InfoFix from './component/pages/InfoFix';


function App() {
  return (
    <div className='app'>
     <AppBar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Join />} />

        <Route path="/user" element={<User />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/infofix" element={<InfoFix />} />

     </Routes>
     </div>
  );
}

export default App;
