import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleClick=(e)=>{
        e.preventDefault()
        const user = {email, password}
        console.log(user)
        fetch("http://localhost:8080/jwt/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then(()=>{
            if(user){
            alert("로그인 성공.")
            navigate('/')
            }else{
            alert("로그인 실패.")
        }
        })
    }

    const paperStyle = {padding:"50px 20px", width:600, margin:"20px auto"}
    const boxStyle = {padding:"5px 5px",  margin:"5px auto"}
  return (
    
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <from>
            <h1> 로그인 </h1>
      <TextField id="outlined-basic" style={boxStyle} label="아이디" variant="outlined" fullWidth
      value={email} 
      onChange={(e)=>setEmail(e.target.value)}/>

      <TextField id="outlined-basic" style={boxStyle} label="비밀번호" variant="outlined" fullWidth
      value={password} 
      onChange={(e)=>setPassword(e.target.value)}/>
      
      <Button variant="contained" onClick={handleClick} endIcon={<SendIcon />}>로그인</Button>
      
        </from>
        </Paper>
      </Container>
  ); 
}