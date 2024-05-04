import React,{useEffect, useState} from 'react'
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showError,setShowError]=useState(false)

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm=event.target;
    if (Object.values(formData).some(value=>value==="")){
      setShowError(true)
      return;
    }else{
      setShowError(false)
      myForm.submit();
    }
  };

  useEffect(()=>{
    if (showError){
      setTimeout(()=>setShowError(false),3000)
    }
  },[showError])

  return (
    <section id='contact' className='md:w-3/4 mx-auto text-center' >
      <h2 className='text-white mb-10  text-xl md:text-3xl'>Contact Me</h2>
    <form  action="https://formsubmit.co/bghanbi50@gmail.com" method="POST" onSubmit={handleSubmit}>
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
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder='Subject'
        />
      <br />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='Write Message'
        />
      <br />
      <motion.button  whileHover={{ scale: 1.1 }} className='text-white px-20 submitForm' type="submit">Submit</motion.button>
      

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
    </section>
  )
}

export default ContactForm