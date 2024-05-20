import React, { useEffect, useState } from 'react';
import { getMyPage } from '../apis/mypage';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useParams, useNavigate } from 'react-router-dom';

const Mypage = ({ setIsLoggedIn }) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
    const boxStyle = { padding: '5px 5px', margin: '5 auto' };

    const handleLogout = () => {
        // 로컬 스토리지에서 토큰 삭제
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
    
        // isLoggedIn 상태를 false로 변경
        setIsLoggedIn(false);
    
        // 홈으로 리디렉션
        navigate('/');
    };

    useEffect(() => {
        getMyPage().then((res) => {
            setData(res);
            setLoading(false);
        });
    }, []);
    
    if (loading) return <div>로딩중</div>;

    const showAddProductButton = data && data.id === 1; // data.id가 1이면 물품 추가 버튼을 보여줄지 여부

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
                    <Button variant="contained" onClick={() => navigate('/')} endIcon={<SendIcon />}>홈페이지</Button>
                    <Button variant="contained" onClick={() => navigate('/cart')} endIcon={<SendIcon />}>장바구니</Button>
                    <Button variant="contained" onClick={() => navigate('/user/myPage/fix')} endIcon={<SendIcon />}>개인정보 변경</Button>
                    <Button variant="contained" color="success" onClick={handleLogout}>로그아웃</Button>
                </form>
            </Paper>
            {showAddProductButton && (
                <Paper elevation={3} style={paperStyle}>
                    <form>
                        <h1>관리자용 버튼</h1>
                        <Button variant="contained" onClick={() => navigate('/product/add')} endIcon={<SendIcon />}>물품 추가</Button>
                        <Button variant="contained" onClick={() => navigate('/order/list')} endIcon={<SendIcon />}>모든 주문 내역</Button>
                    </form>
                </Paper>
            )}
        </Container>
    );
};

export default Mypage;
