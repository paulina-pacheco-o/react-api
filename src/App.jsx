import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {

  const [actors, setActors] = useState([]);

  function fetchActors() {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then((resp) => {
      setActors((resp.data));
      console.log(actors)

    });
  }

  useEffect(() => {
    fetchActors()
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Lista attori</h1>
          </div>
          {actors.map((actor) => {
            return (
              <div className="col-12" key={actor.id}>
                <div className="card">
                  <img src={actor.image} />
                  <div>
                    <h4>{actor.name}</h4>
                    <ul>
                      <li>{actor.birth_year}-{actor.death_year}</li>
                      <li>{actor.nationality}</li>
                      <li>{actor.biography}</li>
                      <li>Know for: {actor.know_for}</li>
                      <li>{actor.awards}</li>
                    </ul>
                  </div>
                </div>
              </div>)
          })}
        </div>
      </div>
    </>
  )
}

export default App
