import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDetail, setProductDetail] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [isVerified, setIsVerified] = useState(false); // 인증 상태를 저장하는 상태 추가
  const navigate = useNavigate();

  const handleSendVerificationEmail = async (e) => {
    e.preventDefault();
    if (!productName || !productCategory || !productPrice || !productDetail || !productImage || !productQuantity) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    const access = localStorage.getItem('access');
    const productAdd = { productName, productCategory, productPrice, productDetail, productImage, productQuantity };
    try {
      const response = await axios.post('http://localhost:8000/product/add', productAdd,{
        headers:{
            Authorization: access,
        },
    }
    );
      
      console.log(response.data);
      alert('물품 추가 성공');
      setIsVerified(true); // 성공적으로 요청을 보냈을 때만 인증 상태를 변경
    } catch (error) {
      console.error('물품 추가 오류:', error);
      alert('물품 추가 실패');
    }
  };

  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  const boxStyle = { padding: '5px 5px', margin: '5 auto' };

  return (
    <body>
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <form>
            <h1>물품추가</h1>
            <TextField
              id="outlined-basic"
              style={boxStyle}
              label="과일 이름"
              variant="outlined"
              fullWidth
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <div>
              <TextField
                id="outlined-basic"
                style={boxStyle}
                label="과일 종류"
                variant="outlined"
                fullWidth
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              />

              <TextField
                id="outlined-basic"
                style={boxStyle}
                label="과일 가격"
                variant="outlined"
                fullWidth
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />

              <TextField
                id="outlined-basic"
                style={boxStyle}
                label="상세보기"
                variant="outlined"
                fullWidth
                value={productDetail}
                onChange={(e) => setProductDetail(e.target.value)}
              />

              <TextField
                id="outlined-basic"
                style={boxStyle}
                label="이미지"
                variant="outlined"
                fullWidth
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                style={boxStyle}
                label="수량"
                variant="outlined"
                fullWidth
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
              />

              <Button
                variant="contained"
                onClick={handleSendVerificationEmail} // 수정: handleSendVerificationEmail 함수로 변경
                endIcon={<SendIcon />}
               // 인증이 되지 않았을 경우 버튼을 비활성화
              >
                물품 추가
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
    </body>
  );
}
