import React, { useEffect } from 'react'
import { getMyPage } from '../apis/mypage';

const Mypage = () => {
    useEffect(() => {
     getMyPage().then((res) => console.log(res));
}, []);
    return <div>MyPage</div>;
};

export default Mypage;