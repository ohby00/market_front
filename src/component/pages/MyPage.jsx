import React, { useEffect, useState } from 'react'
import { getMyPage } from '../apis/mypage';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useParams, useNavigate } from 'react-router-dom';

const Mypage = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
    const boxStyle = { padding: '5px 5px', margin: '5 auto' };

    useEffect(() => {
        getMyPage().then((res) => {
            setData(res);
            setLoading(false);
        });
      }, []);
    
    if(loading) return <div>로딩중</div>;
    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <form>
                    <h1>{data.name ? `${data.name}님의 마이페이지` : '마이페이지'}</h1>
                    <TextField id="email" style={boxStyle} label="이메일" variant="outlined" fullWidth value={data?.email || ''} disabled={!data.email} />
                    <TextField id="password" style={boxStyle} label="비밀번호" variant="outlined" fullWidth value={data?.password || ''} disabled={!data.password} />
                    <TextField id="name" style={boxStyle} label="이름" variant="outlined" fullWidth value={data?.name || ''} disabled={!data.name} />
                    <TextField id="phone" style={boxStyle} label="전화번호" variant="outlined" fullWidth value={data?.phone || ''} disabled={!data.phone} />
                    <TextField id="address" style={boxStyle} label="주소" variant="outlined" fullWidth value={data?.address || ''} disabled={!data.address} />
                    <Button variant="contained" onClick={() => navigate('/infofix')} endIcon={<SendIcon />}>개인정보 변경</Button>
                    <Button variant="contained" onClick={() => navigate('/')} endIcon={<SendIcon />}>홈페이지</Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Mypage;
