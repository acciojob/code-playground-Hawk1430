import React from 'react'

const Home = ({isAuth, handleAuth}) => {
  return (
    <>
      <p>Login</p>
      <button onClick={handleAuth}>{isAuth ? 'Log Out' : 'Log In'}</button>
    </>
  )
}

export default Home