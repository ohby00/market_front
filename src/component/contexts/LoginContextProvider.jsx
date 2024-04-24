import React, { createContext } from 'react'


export const LoginContext = createContext();
LoginContext.displayName = 'LoginContextName'

const LoginContextProvider = ({ childeren }) => {
    // context value : 로그인 여부, 로그아웃 함수
    const [isLogin, setLogin] = userState(false);

    const logout = () =>{
        setLogin(false)
    }

  return (
    <LoginContext.Provider value={ {isLogin, logout} }>
        {childeren}
    </LoginContext.Provider>


  )
}

export default LoginContextProvider