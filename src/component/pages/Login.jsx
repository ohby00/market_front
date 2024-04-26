import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import { login } from '../apis/login';

export default function LoginPage({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const idClick = async () => {
    if (!email || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    try {
      const result = await login(email, password);
      const { accessToken, refreshToken } = result;
      localStorage.setItem('access', accessToken);
      localStorage.setItem('refresh', refreshToken);
      setIsLoggedIn(true); // 로그인 상태 업데이트
      navigate('/');
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const boxStyle = { padding: "5px 5px", margin: "5px auto" };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <form>
          <h1>로그인</h1>
          <TextField
            id="outlined-basic"
            style={boxStyle}
            label="아이디"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            style={boxStyle}
            label="비밀번호"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" onClick={idClick} endIcon={<SendIcon />}>로그인</Button>
          <Button variant="contained" onClick={() => navigate('/register')} endIcon={<SendIcon />}>회원가입</Button>
        </form>
      </Paper>
    </Container>
  );
}
