import React from 'react'
import RegisterNavber from '../registerComponents/RegisterNavber'
import FooterRegisterLogin from '../footer/FooterRegisterLogin'
import Register from '../registerComponents/Register'

const RegisterMessagers = () => {
  return (
    <section>
      <RegisterNavber/>
      <Register/>
      <FooterRegisterLogin/>
    </section>
  )
}

export default RegisterMessagers
