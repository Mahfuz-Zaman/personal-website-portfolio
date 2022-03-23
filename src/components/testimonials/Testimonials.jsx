import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />         
          </div>
          <h5 className="client__name">Rakib Rayhan</h5>
            <small className="client__review">Mahfuz is a highly professional content writer who can plan, research, write and make seamless distinctions with his multi-faceted skills. We do work together at THEMEXPERT and had a lot of memories of work and off work. Shams is the best teammate I have ever had in my entire content writing career. It will be an honor to work with you again. </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="" />         
          </div>
          <h5 className="client__name">Shahin</h5>
            <small className="client__review">Mahfuz Zaman is a focused professional who knows what to prioritize and when to get that done. He is an excellent content writer. He is also a multi-tasker who can effortlessly manage multiple projects at a time. It is certainly a great experience working with such a knowledgeable person</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="" />         
          </div>
          <h5 className="client__name">Miraj</h5>
            <small className="client__review">Mahfuz: the example of decent, polite, talent, and smartness. His exceptional workflow, skills, imagination, and understanding of core problems made the project a dream. Excellent and result-driven. Eager professional. No matter how complex the problem is, he will always come up with a brilliant, and elegant solution.</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="" />         
          </div>
          <h5 className="client__name">Shahed</h5>
            <small className="client__review">Mahfuz is one of the few creative content developers who know how to create engaging contents and rank them on SERP as well. I have had the opportunity to work with him and I had never seen him missing deadlines. He is a very focused, talented, and humorous person who can cheer up the team when it's needed</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials