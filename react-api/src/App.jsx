import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [actress, setActress] = useState([]);

  const fetchActress = () => {
    axios.get('https://lanciweb.github.io/demo/api/actresses/')
      .then(response => {

        console.log('Raw API response:', response);
        console.log('Response data:', response.data);
        setActress(response.data);
      })
      .catch(error => {
        console.error(`Error fetching data: ${error}`);
      });
  };

  useEffect(() => {
    fetchActress();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="main-title">Actress List</h1>
        <div className="actress-grid">
          <div key={index} className="actress-card">
            <h2 className="actress-name"></h2>
            <div className="actress-image">
            </div>
            <div className="actress-details">

              <div className="biography">
              </div>
              <div className="awards">
                <ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
