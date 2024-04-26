// Home.js
import React from 'react';
import { Container, Paper, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

export default function HomePage({ isLoggedIn }) {
  const navigate = useNavigate();
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const imageStyle = { display: "block", margin: "0 auto 20px", width: "50%" }; // 이미지 스타일 추가

  return (
    <Container>
      <Paper style={paperStyle}>
        <img src="/samchunpo.jpeg" alt="My Image" style={imageStyle} /> {/* 이미지 중앙 정렬 */}
        {isLoggedIn ? (
          <>
            <Button variant="contained" onClick={() => navigate('/mypage')} endIcon={<SendIcon />}>마이페이지</Button>
          </>
        ) : (
          <Button variant="contained" onClick={() => navigate('/login')} endIcon={<SendIcon />}>로그인 페이지</Button>
        )}
      </Paper>
    </Container>
  );
}
