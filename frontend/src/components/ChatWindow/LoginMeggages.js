import React from 'react'
import Login from '../LoginComponent/Login'
import LoginNavber from '../LoginComponent/LoginNavber'
import FooterRegisterLogin from '../footer/FooterRegisterLogin'

const LoginMeggages = () => {
  return (
    <section>
        <LoginNavber/>
        <Login/>
        <FooterRegisterLogin/>
    </section>
  )
}

export default LoginMeggages
