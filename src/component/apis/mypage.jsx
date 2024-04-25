import axios from "axios";
import { getNewRefreshToken } from "./refresh";

export const getMyPage = async () => {
    const access = localStorage.getItem('access');
    try {
        const result = await axios.get('http://localhost:8080/jwt/page',{
            headers:{
                Authorization: access,
            },
        });
        return result.data;
    } catch (error) {
        console.error("Error occurred:", error); // 에러 콘솔에 출력
        if(error.response.status === 401,500){
            // 토큰이 만료된 경우
          const {accessToken, refreshToken } = await getNewRefreshToken();
          error.config.headers.Authorization = accessToken;
          localStorage.setItem('access', accessToken);
            localStorage.setItem('refresh', refreshToken);
          return (await axios.get(error.config.url, error.config)).data;
        }
    }
};
