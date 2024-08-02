import React from 'react'
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

type formval = {
  name: string;
  email: string;
  message: string
}

const ContactForm = () => {
  const form = useForm<formval>()
  const { register, control, handleSubmit , formState } = form
  const {errors} = formState
  const onSubmit = (data: formval) => {
    console.log("clicked", data)
  }

  return (
    <>
    <form className="container" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className="display-5">Contact Form</h1>
      
          
            <div className='form-group'>
              <label htmlFor="name" className="form-label">Name</label>
              <input className="inputfield " {...register("name", { required: "Name is required" })} type="text" placeholder="Enter your name" />
            </div>
             <p className="error">{errors.name?.message}</p>
  
         
            <div className='form-group'>
              <label className="form-label" htmlFor="email">Email</label>
              <input className="inputfield email" {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email address"
                }
              })} type="email" placeholder="Enter your email" />
            </div>
            <p  className="error">{errors.email?.message }</p>
        
          
            <div className='form-group'>
              <label htmlFor="message" className="form-label">Message</label>
              <input className="inputfield message" {...register("message" , {required : "Message required" })} type="text" placeholder="Leave a message" />
            </div>
            <p  className="error">{errors.message?.message}</p>
          <button type="submit" className="btn btn-primary">Submit</button>
          
      

      <DevTool control={control} />
    </form>
    </>
    

  )
}

export default ContactForm