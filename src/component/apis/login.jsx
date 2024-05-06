import axios from "axios"
export const login = async (email, password) => {
    const result = await axios.post('http://localhost:8000/jwt/login',{email,password});
    return result.data;
}