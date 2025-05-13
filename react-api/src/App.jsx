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
        <div className="card">

        </div>
      </div>

    </>
  );
}

export default App
