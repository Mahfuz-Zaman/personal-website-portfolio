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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2All className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services