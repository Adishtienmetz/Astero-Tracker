import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './AsteroidDetails.css'

const AsteroidDetails = () => {

  const key = 'fZb00VFq7FbGgvz1cqmrmnBrHlEgkJtiNaySlcGg';
  const params = useParams();
  const url = `https://api.nasa.gov/neo/rest/v1/neo/${params.asteroidId}?api_key=${key}`
  console.log(url);
  const [asteroid, setAsteroid] = useState({});
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setAsteroid(res.data);
      setLoaded(true);
    })
    .catch((err) => {
      console.log(err.message)
    })
  }, [url])
  
  return (
    <div>
      {loaded ? (
        <div className='asteroid-container'>
          <div className='content'>
            <h1>{asteroid?.name}</h1>
          </div>
          <div className='content'>
            <div className='hazard'>
              <span className='can-hit'>
                Potentially Hazardous: {asteroid?.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}!
              </span>
            </div>
          </div>
          <div className='content'>
            <h1 className='orbit-details-title'>Orbit Details:</h1>
            <div className='info'>
              <div className='asteroid-heading'>
                <p>Orbit Id: {asteroid.orbital_data?.orbit_id}</p>
                <p>Orbit Type: {asteroid.orbital_data?.orbit_class?.orbit_class_type}</p>
              </div>
              <div className='orbit-desc'>
                <p>{asteroid.orbital_data?.orbit_class?.orbit_class_description}</p>
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='stats'>
              <div className='left'>
                <div className='row'>
                  <h4>First Observation Date</h4>
                  <p>{asteroid.orbital_data?.first_observation_date}</p>
                </div>
                <div className='row'>
                  <h4>Last Observation Date</h4>
                  <p>{asteroid.orbital_data?.last_observation_date}</p>
                </div>
              </div>
              <div className='right'>
                <div className='row'>
                  <h4>Observations Used</h4>
                  <p>{asteroid.orbital_data?.observations_used}</p>
                </div>
                <div className='row'>
                  <h4>Mean Motion</h4>
                  <p>{asteroid.orbital_data?.mean_motion}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='loading-container'>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  )
}

export default AsteroidDetails