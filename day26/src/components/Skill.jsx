import React from 'react'
import WomenImg from '../women.jpeg'


const Skill = () => {
  return (
      <div className="skill">
          <div className='skills-first'>
              <button>#Learn   #Build  #Grow </button>
              <h2>Your Skills <br />
                  
                  Your Future <i class="fa-brands fa-dart-lang"></i></h2>
                  
              <p>Learn in-demand skills from industry experts and <br />
              take the next step towards your dream career🎓✨.</p>
          </div>

          <div className='btn'>
              <button>Explore Courses <i class="fa-solid fa-arrow-right"></i></button>
          </div>

          <div className='watch'>
              <button><i class="fa-regular fa-circle-play"></i>  Watch Video <i class="fa-solid fa-arrow-right"></i></button>
          </div>
          

          <div className='women'>
          <img src={WomenImg} alt="" />
          </div>
{/* 
          <div className='learn'>
              <h1>Learn <br />
                  Today <br />
                  Lead <br />
              Tomorrow <i class="fa-regular fa-star"></i></h1>
          </div> */}

          <div className='class'>
              <h2><i class="fa-solid fa-video"></i> Live Class</h2>
              <h2><i class="fa-brands fa-r-project"></i> Projects</h2>
              <h2><i class="fa-solid fa-award"></i> Certifications</h2>
              <h2><i class="fa-solid fa-briefcase"></i> Career Support</h2>
          </div>

         
  </div>
  )
}

export default Skill
