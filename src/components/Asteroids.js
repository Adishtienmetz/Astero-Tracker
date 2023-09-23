import React from 'react'
import { Link } from 'react-router-dom'
import './Asteroids.css'
import Asteroid from './Asteroid'

const Asteroids = (props) => {
  const date = new Date();
  const fullDate = `${date.getFullYear()}-${(date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1}-${date.getDate()}`

  
  return (
    <div className='container'>
        <Link className='tomorrow' to={`/tomorrow`}>Check out tomorrow's asteroids!</Link>
        <div className="heading">
            <p>#</p>
            <p className='asteroid-name'>Asteroid Name</p>
            <p>Size (Diameter)</p>
            <p>Missed Distance</p>
            <p>Magnitude</p>
        </div>
        {props.asteroids.near_earth_objects?.[fullDate].map((asteroid, index) => (
            <Link to={`/asteroid/${asteroid.id}` } key={index}>
                <Asteroid asteroid={asteroid} index={index}/>
            </Link>
        ))}
    </div>
  )
}

export default Asteroids