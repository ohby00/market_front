import axios from "axios";

export const getMyPage = async () => {
    const access = localStorage.getItem('access');
    const result = axios.get('http://localhost:8080/jwt/page',{
        headers:{
            Authorization: access,
        },
    });
    return result.data;
};