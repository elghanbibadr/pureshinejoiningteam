import React from 'react'
import ContactForm from './ContactForm'
import BouncingBall from './BouncingBall'
import logo from "../src/assets/logo.png"
const App = () => {
  return (
    <>
    <div >
      <img className='h-36 absolute' src={logo} />
      <BouncingBall />
    </div>
    <ContactForm />
    </>
  )
}

export default App