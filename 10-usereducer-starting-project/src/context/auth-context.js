import React, { useState, useEffect } from 'react'

// 기본 텍스트 객체를 만듦
// 반환 : 컴포넌트가 되거나 컨텍스트를 포함하는 객체가 됨
const AuthContext = React.createContext({
  isLoggedIn: false,
  // 자동완성을 위해 더미 화살표 함수를 넣음
  onLogout: () => {},
  onLogin: (email, password) => {},
})

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true)
    }
  }, [])

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(false)
  }

  const loginHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(true)
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
