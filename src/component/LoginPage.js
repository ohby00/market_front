import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function LoginPage() {
    const[userId, setUserId] = useState('')
    const[password, setPassword] = useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        const user = {userId, password}
        console.log(user)
        fetch("http://localhost:8080/user/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then(()=>{
            if(user)
            alert("회원가입에 성공하셨습니다.")
            else
            alert("실패하였습니다")
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
      value={userId} 
      onChange={(e)=>setUserId(e.target.value)}/>

      <TextField id="outlined-basic" style={boxStyle} label="비밀번호" variant="outlined" fullWidth
      value={password} 
      onChange={(e)=>setPassword(e.target.value)}/>
      
      <Button variant="contained" onClick={handleClick} endIcon={<SendIcon />}>로그인</Button>

        </from>
        </Paper>
      </Container>
  ); 
}