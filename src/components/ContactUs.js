import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_49l84p6', 'template_bux0f5c', form.current, 'KsTPC-2lEI01PdBua')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className="col-md-6 col-12">
      <div>
        <div className="container mt-5 mb-5 p-4" id="contact-port">
        <h1>Contact Me</h1>
          <form className="row g-3" ref={form} onSubmit={sendEmail}>
            <label className="form-label mt-5 mb-0">Name:</label>
            <input className="form-control" placeholder='name' id="firstName" type="text" name="user_name" />
            <label className="form-label mt-5 mb-0">Email:</label>
            <input className="col-12 form-control" placeholder='email' id="email" type="email" name="user_email" />
            <label className="mt-3">Message:</label>
            <textarea name="message" className="mt-3 col-12 form-control"  rows="10" cols="20" />
            <input type="submit" value="Send" className="col-sm-6 btn-primary mt-3 mb-5" />
          </form>
        </div>
      </div>
    </div>
        );
      };



      export default ContactUs















