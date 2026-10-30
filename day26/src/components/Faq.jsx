import React from 'react'
import FAQIMG from '../faq.jpeg'

const Faq = () => {
  return (
      <div className='faq'>
          <div className='faq-first'>
              <h2>FAQ</h2>
              <h3>Frequently Asked Questions</h3>
          </div>

          <div className='faq-image'>
              <img src={FAQIMG} alt="" />
          </div>

          <div className='faq-second'>
              <h2>1.What are the prerequisites for the courses?</h2>
              <p>Most of our courses are beginner friendly. You just need a laptop and an interest to learn.</p>
          </div>

          <div className='faq-third'>
              <h2>2.Will I get a certificate after completion?</h2>  
          </div>

          <div className='faq-fourth'>
              <h2>3.Do you provide placement support?</h2>
          </div>
      
    </div>
  )
}

export default Faq
