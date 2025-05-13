import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [actress, setActress] = useState([]);

  const fetchActress = () => {
    axios.get('https://lanciweb.github.io/demo/api/actresses/')
      .then(response => {
        setActress(response.data.results);
      })
      .catch(error => {
        console.log(`Error fetching data: ${error}`);
      });
  };

  useEffect(() => {
    fetchActress();
  }, []);

  return (
    <>
      <div className="container">
        <div className="card">
          {actress.map((actress, index) => (
            <div key={index} className="actress-card">
              <h2>{actress.name}</h2>
              {actress.image && <img src={actress.image} alt={actress.name} />}
              <p>Età:{actress.age}</p>
              <p>Film:{actress.movies?.join(', ')}</p>

            </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default App
