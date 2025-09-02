import { useState } from "react";
import axios from "axios";

function App() {
  const [actors, setActors] = useState([]);

  function fetchActors() {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then((resp) => {
      console.log((resp.data));

    });
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button className="btn btn-primary" onClick={fetchActors}>Carica lista</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
