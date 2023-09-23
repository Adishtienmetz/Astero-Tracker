import axios from "axios";
import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Asteroids from "./components/Asteroids";
import AsteroidDetails from "./routes/AsteroidDetails";
import Tomorrow from "./routes/Tomorrow";

function App() {

  const key = 'fZb00VFq7FbGgvz1cqmrmnBrHlEgkJtiNaySlcGg';
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=&end_date=&api_key=${key}`
  const [asteroids, setAsteroids] = useState([]);


  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setAsteroids(res.data);
    })
    .catch((err) => {
      console.log(err.message)
    })
  }, [url])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Asteroids asteroids={asteroids}/>}/>
        <Route path="tomorrow" element={<Tomorrow asteroids={asteroids}/>}/>
        <Route path="asteroid" element={<AsteroidDetails />}>
          <Route path=":asteroidId" element={<AsteroidDetails />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
