import React from "react";
import { useState } from "react";

import "./gallery.css"

const Gallery = ({pictures}) => {//adds up the gallery component 
    const [currentIndex, setCurrentIndex] = useState(0)
    const previousImage = () => {
        const isFirstImage = currentIndex === 0
        const newIndex = isFirstImage ? pictures.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
      }  
    const nextImage = () => {
        const isLastSlide = currentIndex === pictures.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
      } 
    const currentImage = () =>{
  
    }
    console.log(pictures)
    return (   
        <div className="gallery">
            <div className="left"onClick={previousImage}>
                <i class="fa-solid fa-4x fa-chevron-left"></i>
            </div>
            <img src={pictures[currentIndex]}/>
            <div class="right" onClick={nextImage}>
                <i class="fa-solid fa-4x fa-chevron-right"></i>
            </div>
            <div className="picture-number">
              {currentIndex + 1}/{pictures.length}
            </div>
        </div>
    )
  }
export default Gallery