import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

export default function HomePage() {
    
const PostPage = () => {
    const { id } = useParams();
   const navigate = useNavigate();
      
   return (
          <>
            <div>{id}안녕하세요</div>
            <div onClick={() => navigate('/')}>홈 페이지로 이동하기</div>
           </>
    
   )
}
}