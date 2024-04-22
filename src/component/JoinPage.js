import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

export default function JoinPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [userName, SetUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const user = { userId, password, userName, userEmail };
    console.log(user);
    fetch('http://localhost:8080/user/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }).then(() => {
      if (user) {
        alert('회원가입에 성공하셨습니다.');
        navigate('/login');
      } else {
        alert('실패하였습니다');
      }
    });
  };

  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  const boxStyle = { padding: '5px 5px', margin: '5px auto' };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <from>
          <h1> 회원가입 </h1>
          <TextField
            id="outlined-basic"
            style={boxStyle}
            label="아이디"
            variant="outlined"
            fullWidth
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
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

          <TextField
            id="outlined-basic"
            style={boxStyle}
            label="이름"
            variant="outlined"
            fullWidth
            value={userName}
            onChange={(e) => SetUserName(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            style={boxStyle}
            label="이메일"
            variant="outlined"
            fullWidth
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />

          <Button
            variant="contained"
            onClick={handleClick}
            endIcon={<SendIcon />}
          >
            회원가힙
          </Button>
        </from>
      </Paper>
    </Container>
  );
}
