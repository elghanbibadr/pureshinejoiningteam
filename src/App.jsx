import React from 'react'
import ContactForm from './ContactForm'
import BouncingBall from './BouncingBall'
import logo from "../src/assets/logo6.png"
const App = () => {
  return (
    <>
    <div >
      <img className='h-56  sm:h-72 w-72 -left-20 md:-left-20  object-contain absolute -top-14' src={logo} />
      <BouncingBall />
    </div>
    <ContactForm />
    </>
  )
}

export default App