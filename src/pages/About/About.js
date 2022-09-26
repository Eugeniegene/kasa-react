import React from "react"

import "./About.css"
import MainImageBanner from "../../components/about-main-image/about-main-image"

const About = () => {//adds up the homepage component 
    return (
      <article className="central-info">
        <MainImageBanner imgSource="../../components/about-main-image/about-main-image"/>
      </article>
    )
  }
export default About