import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useParams, useNavigate } from 'react-router-dom';


export default function HomePage() {
    
  const navigate = useNavigate();
  const paperStyle = {padding:"50px 20px", width:600, margin:"20px auto"}

  return (
    <Container>
      <Paper style={paperStyle}>
        <Button variant="contained" onClick={() => navigate('/login')} endIcon={<SendIcon />}>로그인</Button>
        <Button variant="contained" onClick={() => navigate('/register')} endIcon={<SendIcon />}>회원가입 </Button>
        <Button variant="contained" onClick={() => navigate('/admin')} endIcon={<SendIcon />}>관리자 화면 </Button>
        </Paper>
      </Container>
  ); 
}