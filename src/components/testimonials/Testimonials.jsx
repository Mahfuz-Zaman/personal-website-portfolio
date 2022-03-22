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
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit recusandae adipisci, odit nam exercitationem dolorem explicabo nostrum. Obcaecati fuga facere iusto minima quod corporis, placeat consequuntur explicabo quam alias!</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="" />         
          </div>
          <h5 className="client__name">Shahin</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit recusandae adipisci, odit nam exercitationem dolorem explicabo nostrum. Obcaecati fuga facere iusto minima quod corporis, placeat consequuntur explicabo quam alias!</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="" />         
          </div>
          <h5 className="client__name">Miraj</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit recusandae adipisci, odit nam exercitationem dolorem explicabo nostrum. Obcaecati fuga facere iusto minima quod corporis, placeat consequuntur explicabo quam alias!</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="" />         
          </div>
          <h5 className="client__name">Amit</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit recusandae adipisci, odit nam exercitationem dolorem explicabo nostrum. Obcaecati fuga facere iusto minima quod corporis, placeat consequuntur explicabo quam alias!</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials