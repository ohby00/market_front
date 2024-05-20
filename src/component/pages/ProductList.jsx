import React, { useEffect, useState } from 'react';
import { getProductList } from '../apis/productlist';
import { Container, Paper, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

const ProductList = ({}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const paperStyle = { 
        padding: '20px', 
        margin: '10px', 
        width: 'calc(25% - 20px)', // 변경된 너비 값
        boxSizing: 'border-box',
        marginTop: '40px', // 위쪽 여백 추가
        marginBottom: '40px', // 아래쪽 여백 추가
       
        
    };
    const containerStyle = { 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between'
    };

    useEffect(() => {
        getProductList()
            .then((res) => {
                setProducts(res);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching product list:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>로딩중</div>;

    return (
        <Container style={containerStyle}>
            {products.map(product => (
                <Paper key={product.productId} elevation={3} style={paperStyle}>
                    <h1>{product.productName}</h1>
                    <p>가격: {product.productPrice.toLocaleString()}원</p>
                    <p>카테고리: {product.productCategory}</p>
                    <p>상세 설명: {product.productDetail}</p>
                    <Button variant="contained" onClick={() => navigate(`/product/${product.productId}`)} endIcon={<SendIcon />}>
                        제품 상세 보기
                    </Button>
                </Paper>
            ))}
        </Container>
    );
};

export default ProductList;
