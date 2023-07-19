import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Fade, Zoom, Slide} from 'react-slideshow-image'

const slideImages = [
  {
    url: "https://img.freepik.com/free-photo/smiling-korean-woman-showing-mobile-phone-app-interface-smartphone-application-recommending-cellphone-standing-blue-background_1258-100066.jpg?w=1380&t=st=1687785722~exp=1687786322~hmac=784bd0e980241c77d3be1cdfc77e2aaf98236657478b99e64ac16e382515eaed"
  },
  {
    url: "https://www.lanmodo.com/res/article/car-covers-online-shopping.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
  },
  {
    url: "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=1060&t=st=1687785835~exp=1687786435~hmac=89a8064ef0d57edbda8531f50892ff22917d94d42525d48d1010e156bf1311bd"
  }
  
];

const divStyle = {
  display: 'flex',
  alignItems:"center",
  justifyContent: "center",
  width: "1300",
  height: "560px",
  backgroundSize: 'cover'
}

const spanStyle = {
  fontSize: "20px",
  background: "#efefef",
  color: "#000000"
}
function BasicSlider() {
  return (
    <div className='slide-container'>
       <Fade duration={1500}>
         {slideImages.map((image, index) => (
           <div key={index}>
              <div style={{...divStyle, backgroundImage:`url(${image.url})`, transition:0.6}}>
                <span style={{spanStyle}}>{image.caption}</span>
              </div>
           </div>
         ))}
       </Fade>
    </div>
  )
}

export default BasicSlider