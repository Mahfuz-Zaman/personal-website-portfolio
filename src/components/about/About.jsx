import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
    return (
      <section id='about'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>
      <div className="container about__container">
  <div className="about__me">
    <div className="about__me-image">
      <img src={ME} alt="about_image" />
    </div>
  </div>
  <div className="about__content">
  <div className="about__cards">
    <article className="about__card">
      <FaAward className='about__icon'/>
      <h5>Experience</h5>
      <small>3+ years Working</small>
    </article>
    <article className="about__card">
      <FiUsers className='about__icon'/>
      <h5>Clients</h5>
      <small>300+ Worldwide</small>
    </article>
    <article className="about__card">
      <VscFolderLibrary className='about__icon'/>
      <h5>Projects</h5>
      <small>15+ Completed</small>
    </article>
  </div>
  <p>Hi, I'm glad you're here! I'm a Technical lead with hands-on experience in Javascript, React.js, and Nodejs for the past 2 years coupled with a great amount of development experience.To achieve my objective I am fully prepared to show my honesty, hard work, patience, physical and mental fitness and sufficient confidence along with merit encountering any sort of diverse situation. Want to impact lives through meaningful works & contribution using my potentials in the field of technology.</p>
  <a href="#contact" className='btn btn-primary'>Let's Talk</a>
  </div>
        </div>
      
      </section>
  )
}

export default About