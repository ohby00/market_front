import axios from "axios";


export const getOrderList = async () => {
    const access = localStorage.getItem('access');
    
        const result = await axios.get('http://localhost:8000/order/list',{
            headers:{
                Authorization: access,
            },
        });
        return result.data;
    
};
