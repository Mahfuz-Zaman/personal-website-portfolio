import React from 'react'
import "./services.css"
import {BsCheck2All} from "react-icons/bs"

const Services = () => {
  return (
    <section id='services'>
      <h5>What i Offer?</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UX/UI Design</h3>
          </div>
          <ul className="service__list">
            <li><BsCheck2All className="service__list-icon"/>
            <p>Prepare and present rough drafts to internal teams and key stakeholders</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Illustrate design ideas using storyboards, process flows and sitemaps</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Design graphic user interface elements, like menus, tabs and widgets</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Gather and evaluate user requirements in collaboration with product managers and engineers</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Develop UI mockups and prototypes that clearly illustrate how sites function and look like</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Adhere to style standards on fonts, colors and images</p>
            </li>

          </ul>
        </article>
        {/* End Of Ux/UI  */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li><BsCheck2All className="service__list-icon"/>
            <p>Write well designed, testable, efficient code by using best software development practices</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Create website layout/user interface by using standard HTML/CSS practices</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Integrate data from various back-end services and databases.</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Gather and refine specifications and requirements based on technical needs</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Create and maintain software documentation</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Be responsible for maintaining, expanding, and scaling our site</p>
            </li>
 
          </ul>
        </article>
        {/* End Of Web Development  */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li><BsCheck2All className="service__list-icon"/>
            <p>Research industry-related topics</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Prepare well-structured drafts using digital publishing platforms</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Create and distribute marketing copy to advertise our company and products</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Interview industry professionals and incorporate their views in blog posts</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Edit and proofread written pieces before publication</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Promote content on social networks and monitor engagement</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Identify customers’ needs and recommend new topics</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services