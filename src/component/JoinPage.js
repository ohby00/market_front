import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Code } from '@mui/icons-material';

export default function JoinPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate();

  const handleSendVerificationEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/user/send', {email} );
      console.log(response.data)
      alert('이메일을 확인하여 인증 코드를 입력해주세요.');
    } catch (error) {
      console.error('이메일 전송 오류:', error);
    }
  };

  const handleVerification = async (e) => {
    e.preventDefault();
    const verifyData = { email, verificationCode }; // email과 verificationCode를 verifyData 객체에 담음
    const config = {
        method: 'post', // POST 메서드
        url: 'http://localhost:8080/user/checkEmail', // 요청 URL
        data: verifyData, // verifyData를 요청 데이터로 설정
        headers: {
            'Content-Type': 'application/json', // JSON 형식으로 데이터 전송
          
        },
    };
    try {
        const response = await axios(config); // axios를 사용하여 POST 요청 전송
        console.log(email);
        console.log(verificationCode);
        alert('이메일 인증이 완료되었습니다.');
    } catch (error) {
        console.error('이메일 인증 오류:', error);
        console.log(email);
        console.log(verificationCode);
        alert('인증 코드가 일치하지 않습니다.');
    }
};


  const handleSignUp = async (e) => {
    e.preventDefault();
    const user = { email, password, username, phone, address };
    try {
      const response = await axios.post('http://localhost:8080/user/save', user);
      console.log(response.data);
      alert('회원가입에 성공하셨습니다.');
      navigate('/');
    } catch (error) {
      console.error('회원가입 오류:', error);
      alert('회원가입에 실패하였습니다.');
    }
  };

  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  const boxStyle = { padding: '5px 5px', margin: '5 auto' };

  return (
    <body>
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <form>
          <h1>회원가입</h1>
          <TextField
            id="outlined-basic"
            style={boxStyle}
            label="이메일"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            variant="contained"
            onClick={handleSendVerificationEmail}
            endIcon={<SendIcon />}
          >
            인증 코드 전송
          </Button>

 
            <div>
              <TextField
                id="outlined-basic"
                style={boxStyle}
                label="인증 코드"
                variant="outlined"
                fullWidth
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />

              <Button
                variant="contained"
                onClick={handleVerification}
              >
                인증 코드 확인 
              </Button>
            </div>


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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            style={boxStyle}
            label="휴대전화"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            style={boxStyle}
            label="주소"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <Button
            variant="contained"
            onClick={handleSignUp}
            endIcon={<SendIcon />}
          >
            회원가입
          </Button>
        </form>
      </Paper>
    </Container>
    </body>
  );
}

