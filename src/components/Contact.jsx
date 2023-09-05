import React, {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import {styles} from '../styles'

import SectionWrap from '../hoc/SectionWrap'
import { slideIn } from '../utils/motion'



const contact = () => {
  
  const FormRef = useRef();

  const [form,setForm]= useState ({
    name: '',
    email: '',
    message: ''
  });

  const[loading, setLoading] = useState(false);

  const handleChanges = (e) => {}

  const handleSubmit = (e) => {}



  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden '>
    
    contact

    </div>
  )
}

export default  SectionWrap (contact,"") 