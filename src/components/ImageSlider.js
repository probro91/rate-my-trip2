import React, {useState, useEffect, useRef} from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'


const ImageSlider = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length


const nextSlide = () => {
   //images = length -1 (index)
   setCurrent(current === length - 1 ? 0 : current + 1)
}


const prevSlide = () => {
   setCurrent(current === 0 ? length -1 : current -1)
}




console.log(current)
if(!Array.isArray(slides) || slides.length <= 0) {
   return null
}
 return (
   <section className="slider">
       <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} style={{color:"#4B6F44"}}/>
       <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} style={{color:"#4B6F44"}}/>
   {SliderData.map((slide, index) => {


       return (
          <div className={index === current ? 'slide active' : 'slide'} key=
          {index}>
           {index === current && (
           <img src={slide.image} alt="travel image" className='image'/>)}
             
          </div>
       )
    })}
   </section>
 )
}


export default ImageSlider