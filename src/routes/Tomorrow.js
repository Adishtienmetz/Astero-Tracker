import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Asteroids.css'
import Asteroid from '../components/Asteroid'

const Tommorow = (props) => {
    const date = new Date();
    date.setDate(date.getDate()+1);
    const fullDate = `${date.getFullYear()}-${(date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1}-${date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}`;

  
  return (
    <div className='container'>
        <Link className='today' to={`/`}>Go back!</Link>
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

export default Tommorow
