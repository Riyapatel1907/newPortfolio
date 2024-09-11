import React from 'react'
import './Contact.css'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import toast from 'react-hot-toast';

export const Contact = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo={
      FullName: data.FullName,
      Email: data.Email,
      Msg: data.Msg
    }
    try{
      await axios.post("https://getform.io/f/ajjelgda", userInfo)
      console.log(userInfo)
      toast.success("Your message has been sent")
    } catch(error){
      toast.error(error)
    }
  }

  return (
    <>
        <h1 name='Contact' className='head mt-4'>Contact me</h1>
        <span className='para'>Please fill out the form below to contact me</span>
        <div className='mark mt-4 bg-body-secondary justify-content-center align-items-center'>
            <form  onSubmit={handleSubmit(onSubmit)} >
            <h3 className='mt-4 text-center'>Send Your Message</h3>
            <div className='msg'>
                <label>Full Name</label><br />
                <input {...register('FullName', { required: true })} type='text' name='FullName' placeholder='Enter your full name' /><br/>
                <label>Email address</label><br />
                <input {...register('Email', { required: true })} type='text' name='Email' placeholder='Enter your email address' /><br/>
                <label>Message</label><br/>
                <textarea {...register('Msg', { required: true })} name='Msg' placeholder='Write message' cols={32} rows={5} /> <br/>
                <button className='mt-3 bg-black text-white rounded-2' type='submit'>Send</button>
            </div>
            </form>
        </div>
    </>
  )
}
