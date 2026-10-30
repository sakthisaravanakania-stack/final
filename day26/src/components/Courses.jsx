import React from 'react'
import JavaImg from '../java.jpeg'
import DataImg from '../data.jpeg'
import AppImg from '../app.jpeg'

const Courses = () => {
  return (
      <div className='course'>
          <div className='courde-first'>
        <h3>POPULAR COURSES</h3>
        <h5>Explore Our Most Popular Courses</h5>
      </div>
      

      <div className='course-image'>
        <img src={JavaImg} alt="" />
        <img src={DataImg} alt="" />
        <img src={AppImg} alt="" />
      </div>

      <div className='subject'>
        <h3>Full Stack Development</h3>
        <h5>Learn HTML,CSS,JavaScript <br />
          React,Node.js,real projects.</h5>
        <p>Beginner</p>
        <h4>12 Weeks</h4>
        <h2>Rs.4,999</h2>
      </div>


      <div className='subject1'>
        <h3>Data Analytics</h3>
        <h5>Learn data analysis, visualization <br />
          and tools like Excel,SQL and Power BI.</h5>
        <p>Beginner</p>
        <h4>12 Weeks</h4>
        <h2>Rs.3,499</h2>
      </div>


      <div className='subject2'>
        <h3>App Development</h3>
        <h5>Build modern mobile apps using <br />
          React Native and real-world projects.</h5>
        <p>Beginner</p>
        <h4>8 Weeks</h4>
        <h2>Rs.3,999</h2>
      </div>
      
    </div>
  )
}

export default Courses;

