import React from 'react'
import ContactForm from './ContactForm'
import BouncingBall from './BouncingBall'
import logo from "../src/assets/logo.png"
const App = () => {
  return (
    <>
    <div >
      <img className='h-32  sm:h-40 -left-10 md:left-0  object-contain absolute -top-14' src={logo} />
      <BouncingBall />
    </div>
    <ContactForm />
    </>
  )
}

export default App