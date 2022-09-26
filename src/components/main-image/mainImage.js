import React from "react"

import "./mainImage.css"
import bannerImage from "../../IMG.png"

const MainImage = () => {//adds up the image component 
    return (
        <main className="Homepage">
            <div className="main-image-banner">
                <img className="landscape-banner" src={bannerImage} alt="banner-img" />
                <p className="banner-text">Chez vous, partout et ailleurs</p>
            </div>
      </main>
    )
  }

export default MainImage