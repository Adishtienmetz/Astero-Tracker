import React from 'react'
import './Asteroids.css'

const Asteroid = (props) => {
  return (
    <div className='asteroid-row'>
        <p>{props.index+1}</p>
        <p>{props.asteroid.name}</p>
        <p>{props.asteroid.estimated_diameter.meters.estimated_diameter_min.toFixed(2)} - {props.asteroid.estimated_diameter.meters.estimated_diameter_max.toFixed(2)}m</p>
        <p>{Number(props.asteroid.close_approach_data[0].miss_distance.kilometers).toLocaleString()}km</p>
        <p>{props.asteroid.absolute_magnitude_h.toLocaleString()}am</p>
    </div>
  )
}

export default Asteroid

