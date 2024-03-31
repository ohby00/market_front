import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function AdminPage() {    
    const[AllUser, setAllUser] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8080/user/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setAllUser(result);
        }
    )
    },[])


    const paperStyle = {padding:"50px 20px", width:600, margin:"20px auto"}
    const boxStyle = {padding:"5px 5px",  margin:"5px auto"}
  return (
    
    <Container>
        
      <Paper elevation={3} style={paperStyle}>
      <h1>관리자 페이지</h1>
       {AllUser.map(user=>(
        <Paper elevation={6} style={{margin:"10px", padding:"15px"}} key={user.id}>
            Id:{user.id}
            UserId:{user.userId}
            Password:{user.password}
            Name:{user.userName}
            Email:{user.userEmail}
        </Paper>
        ))
       }
        </Paper>
      </Container>
    
  ); 
}