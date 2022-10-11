import React from "react"

import { Link } from 'react-router-dom'
import locationList  from "../../data/hotels.json"

async function getLocationDisplay() {
    const response = await fetch('../../data/hotels.json')
    const { locationList } = await response.json()
    return locationList
  }

function LocationThumbnail ({ id, titre, cover }) {//adds up the homepage component 
    return (
        <Link to={`/hotels/${id}`}>
            <figure>
                <img src={cover} alt='location-illustration' />
                <figcaption> {titre} </figcaption>
            </figure>
      </Link>
    )
  }

export default LocationThumbnail