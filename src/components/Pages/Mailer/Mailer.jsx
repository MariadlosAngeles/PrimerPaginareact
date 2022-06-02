import React from 'react'
import emailjs from '@emailjs/browser'

export const Mailer = () => {

    const sendEmail=(event)=>{
        event.preventDefault();

        emailjs.sendForm('service_60pctfp','template_s39rmrk',event.target,'u0yXRySJXiMJicwy7')
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
    }
  return (
    <div className='div-form'>
      <div className='formulario'>
    <h1 className='title-form'>Contact Us</h1>
    <form className='form-mail' onSubmit={sendEmail}>
      <label>Name</label>
      <input className='inputMailer' type="text" name='user_name' />
      <hr className='lineaMailer' />

      <label>Email</label>
      <input className='inputMailer' type="email" name='user_email' />
      <hr className='lineaMailer'/>

      <label>Message</label>
      <textarea name="user_message" id="" cols="30" rows="10"></textarea>
      <hr className='lineaMailer'/>
      <button>Send</button>
    </form>
    </div>
  </div>
  )
}
