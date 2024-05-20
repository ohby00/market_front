import React, { useEffect, useState } from 'react';
import { getOrderList } from '../apis/orderlist';
import { Container, Paper, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const paperStyle = { 
        padding: '20px', 
        margin: '10px', 
        width: 'calc(33.333% - 20px)', 
        boxSizing: 'border-box'
    };
    const containerStyle = { 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between'
    };

    useEffect(() => {
        getOrderList()
            .then((res) => {
                setOrders(res);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching order list:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>로딩중</div>;

    return (
        <Container style={containerStyle}>
            {orders.map(order => (
                <Paper key={order.orderId} elevation={3} style={paperStyle}>
                    <h1>주문 번호: {order.orderId}</h1>
                    <p>사용자 ID: {order.userId}</p>
                    <p>주문 날짜: {new Date(order.orderDate).toLocaleString()}</p>
                    <p>총 가격: {order.orderTotalPrice.toLocaleString()}원</p>
                    <p>상태: {order.status}</p>
                    <Button variant="contained" onClick={() => navigate(`/order/${order.orderId}`)} endIcon={<SendIcon />}>
                        주문 상세 보기
                    </Button>
                </Paper>
            ))}
        </Container>
    );
};

export default OrderList;
