import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Laptop-Valley</h3>
 <div className="portfolio__items-cta">
 <a href="https://github.com/Mahfuz-Zaman/Project-Laptop-Valley-Client" className="btn" target="_blank">GitHub</a>
          <a href="https://laptop-valley-assignment-12.web.app/" className="btn btn-primary" target="_blank">Live Demo</a>
 </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>BD-Travel</h3>
 <div className="portfolio__items-cta">
 <a href="https://github.com/Mahfuz-Zaman/Project-BD-Travell-Client" className="btn" target="_blank">GitHub</a>
          <a href="https://tourism-assignment.web.app/" className="btn btn-primary" target="_blank">Live Demo</a>
 </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Modern-Hospital</h3>
 <div className="portfolio__items-cta">
 <a href="https://github.com/Mahfuz-Zaman/Project-Modern-Hospital" className="btn" target="_blank">GitHub</a>
          <a href="https://health-care-service-for-all.web.app/" className="btn btn-primary" target="_blank">Live Demo</a>
 </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Personal portfolio Website</h3>
 <div className="portfolio__items-cta">
 <a href="https://github.com/Mahfuz-Zaman/My-Professional-Portfolio" className="btn" target="_blank">GitHub</a>
          <a href="https://mahfuz-zaman-professional-portfolio.netlify.app/#" className="btn btn-primary" target="_blank">Live Demo</a>
 </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Global Learning</h3>
 <div className="portfolio__items-cta">
 <a href="https://github.com/Mahfuz-Zaman/Project-Global-Learning" className="btn" target="_blank">GitHub</a>
          <a href="https://educationalwebsite-global-learning.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
 </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>H-Mart</h3>
 <div className="portfolio__items-cta">
 <a href="https://github.com/Mahfuz-Zaman/Project-H-Mart" className="btn" target="_blank">GitHub</a>
          <a href="https://silly-borg-847e6c.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
 </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio