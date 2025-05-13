import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [actress, setActress] = useState([]);

  const fetchActress = () => {
    axios.get('https://api.themoviedb.org/3/person/popular')
      .then(response => {
        setActress(response.data.results);
      })
      .catch(error) => {
    console.log(error);
  }

  useEffect(() => {
    fetchActress();
  }, []);

  return (
    <>
      <div className="container">
        {actress.map((person) => (
          <div key={person.id}>
            {console.log(person)}
            <p>{person.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
