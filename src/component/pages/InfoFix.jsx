import React, { useEffect, useState } from 'react'
import { getMyPage } from '../apis/mypage';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

const InfoFix = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const [data, setData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getMyPage();
                setData(res);
            } catch (error) {
                console.error('Error fetching my page:', error);
            }
        };
        fetchData();
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    return (
        <Container>
            <Paper elevation={3} style={{ padding: '50px 20px', width: 600, margin: '20px auto' }}>
                <form>
                    <h1>{data.name ? `${data.name}님의 개인 정보 수정` : '개인 정보 수정'}</h1>
                    <TextField id="email" style={{ padding: '5px 5px', margin: '5 auto' }} label="이메일" variant="outlined" fullWidth  value={email} onChange={handleEmailChange} />
                    <TextField id="password" style={{ padding: '5px 5px', margin: '5 auto' }} label="비밀번호" variant="outlined" fullWidth type="password" value={password} onChange={handlePasswordChange} />
                    <TextField id="name" style={{ padding: '5px 5px', margin: '5 auto' }} label="이름" variant="outlined" fullWidth value={name} onChange={handleNameChange} />
                    <TextField id="phone" style={{ padding: '5px 5px', margin: '5 auto' }} label="전화번호" variant="outlined" fullWidth value={phone} onChange={handlePhoneChange} />
                    <TextField id="address" style={{ padding: '5px 5px', margin: '5 auto' }} label="주소" variant="outlined" fullWidth value={address} onChange={handleAddressChange} />
                    <Button variant="contained" onClick={() => navigate('/infofix')} endIcon={<SendIcon />}>변경하기</Button>
                    <Button variant="contained" onClick={() => navigate('/')} endIcon={<SendIcon />}>홈페이지</Button>
                </form>
            </Paper>
        </Container>
    );
};

export default InfoFix;
