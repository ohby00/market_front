import axios from "axios"
export const login = async (email, password) => {
    const result = await axios.post('http://localhost:8000/user/login',{email,password});
    return result.data;
}