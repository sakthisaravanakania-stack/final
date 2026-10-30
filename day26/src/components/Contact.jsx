import React from 'react'
import ContactImg from '../contact.jpeg'


const Contact = () => {
  return (
      <div className='contact'>
      <div className='contact-image'>
        <img src={ContactImg} alt="" />
      
      </div>
      
      <div className='contact-first'>
        <h2>CONTACT US</h2>
        <h3>Let's Get In Touch</h3>
        <p>Have questions? We'd love to hear from you. <br />
          Send us a message and our team will get back to you.</p>
      </div>

      <div className='contact-second'>
        <input type="text" placeholder='Your Name' /> <br />
        <input type="text" placeholder='Your Email' />
      </div>

      <div className='contact-btn'>
        <button>Send Message</button>
      </div>
    </div>
  )
}

export default Contact