import React from 'react'
import AboutImg from '../about.jpeg'

const About = () => {
  return (
      <div className='about'>
          <div className='about-first'>
              <img src={AboutImg} alt="" />
          </div>

          <div className='about-second'>
              <h4>ABOUT SKILLQUEST</h4>
              <h5>We Believe in Learning <br />
                  Without Limits</h5>
              <p>
                  SkillQuest is an online learning platform focused on helping <br />
                  students and professionals gain practical skills, build real projects <br />
                  and achieve their career goals. Our mission is to make quality  <br />
                  education accessible, affordable and effective for everyone.</p>
          </div>

          <div className='about-third'>
              <h3><i class="fa-solid fa-bullseye"></i> Practical Learning</h3>
              <h3><i class="fa-solid fa-users-line"></i>  Industry Experts</h3>
              <h3><i class="fa-solid fa-display"></i> Flexible Learning</h3>
              <h3><i class="fa-solid fa-arrow-up-right-dots"></i> Career Growth</h3>
          </div>
      
    </div>
  )
}

export default About
