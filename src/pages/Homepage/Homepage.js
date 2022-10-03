import React from "react"

import "./Homepage.css"
import MainImage from "../../components/main-image/mainImage"
import LocationDisplay from "../../components/locationDisplay/locationDisplay"
import locationList  from "../../data/hotels.json"
import LocationThumbnail from "../../components/locationThumbnail/locationThumbnail"


const Homepage = () => {//adds up the homepage component 
    //getLocationDisplay()
    console.log(locationList)
    return (
      <section className="main-bloc">
        <MainImage imgSource="../../IMG.png"/>
        <div className='allLocations'>
            <div className="locationBloc">
            {locationList.map((location) => (
            <LocationThumbnail 
                key={location.id}
                id={location.id}
                titre={location.title}
                cover={location.cover}
          />))}
          </div>
        </div>
      </section>
    )
  }
export default Homepage