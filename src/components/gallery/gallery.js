import React from "react";
import { useState } from "react";

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
    return (   
        <div className="gallery">Hi gallery
            {pictures?.length}
            <div onClick={previousImage}>
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div onClick={nextImage}>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    )
  }
export default Gallery