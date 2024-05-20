// apis/productlist.js
import axios from "axios";

export const getProductList = async () => {
    try {
        const result = await axios.get('http://localhost:8000/product/list'); // 제품 목록을 가져오는 API 엔드포인트로 변경
        return result.data;
    } catch (error) {
        console.error("Error fetching product list:", error);
        throw error; // 에러를 다시 throw하여 컴포넌트에서 처리할 수 있도록 함
    }
};
