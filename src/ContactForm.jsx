import React,{useEffect, useState,useRef} from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import checkIcon from "../src/assets/check.png"
const ContactForm = () => {
    const form = useRef();
   const [isSubmiting,setIsSubmiting]=useState(false)
   const [isApplicatedSent,setIsApplicationSent]=useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [showError,setShowError]=useState(false)

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleSubmit =async  (event) => {
    event.preventDefault();
   setIsSubmiting(true)
    const myForm=event.target;
    if (Object.values(formData).some(value=>value==="")){
      setShowError(true)
      return;
    }else{
      setShowError(false)
      // myForm.submit();
    }


    
    

    // sending the email
    emailjs
    .sendForm('service_klj723p', 'template_ljxkuls',form.current, {
      publicKey: 'IglxKjApNUagHGcdh',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setIsApplicationSent(true)

      },
      (error) => {
        setShowError(error)
        
      },
    ).finally(()=>{
     setIsSubmiting(false)
    })
  };

  useEffect(()=>{
    if (showError){
      setTimeout(()=>setShowError(false),3000)
    }
  },[showError])

  return (
    <section id='contact' className='md:w-3/4 mx-auto text-center' >
     { !isApplicatedSent && <>
     
      <h2 className='text-white mb-10  text-xl md:text-3xl'>Lets Grab Your Info!</h2>
    <form ref={form}    onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Name'

        />
      <br />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
        />
      <br />
        <input
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder='phoneNumber'
        />

        <br />
     
      <motion.button  whileHover={{ scale: 1.1 }} className='text-white  submitForm ' type="submit">
        { !isSubmiting && <span>Join the team </span>}
        {isSubmiting && <span>Sending Request ...</span>}
       </motion.button>
      

    </form> 
    <motion.div
        initial={{ opacity: 0, y: 1000 }}
        animate={{ opacity: showError ? 1 : 0, y: showError ? 0 : 10 }}
        transition={{ duration: 0.5}}
        className="error-message"
      >
    
   { showError &&  <div className='fixed flex items-center top-0 left-0 py-2 px-4  rounded-md  w-fit right-0 mx-auto bg-white'>
      <svg className='h-6 inline-flex' fill='red' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"/></svg>
      <p className='text-secondColor mx-2   inline-flex '> fillup  all the fields.</p>
    </div>}
      
      </motion.div>
     </> 
}
    {isApplicatedSent &&  <div className=' py-10 w-[90%] md:w-[70%] items-center flex flex-col justify-center mx-auto p-6 thankyou text-center'>
        <h1 className='text-3xl text-white'>Thank you for your request </h1>
        <p className='my-4'>our team we'll review your request and reach out to you soon !</p>
       <img className='h-14 w-14 ' src={checkIcon} alt="check icon" />
      </div>}
    </section>
  )
}

export default ContactForm