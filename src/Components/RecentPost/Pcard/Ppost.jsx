import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Ppost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a longer loading time (e.g., 3 seconds)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Make a GET request to the server
        const response = await axios.get('http://localhost:8080/RPost');

        // Set the fetched data to the state
        setData(response.data);

        // Set loading to false after the data is fetched
        setLoading(false);
      } catch (error) {
        // Set loading to false if there's an error
        setLoading(false);

        // Set the error to the state
        setError(error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once after the component mounts


  // Render different content based on the state
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
    {data && data.slice(0, 5).map( (item, i) => (
      <div className="popupost flex" key={i}>
        <img src={item.img} alt="" />
        <div className="popupostde">
          <a href="/">
            <h4>{item.title}</h4>
          </a>
          <div className="poputime flex">
            <h5><span>5</span>mins read</h5>
            <p>▪</p>
            <h5>25 April 2023</h5>
          </div>
        </div>
      </div>
       ))}
    </>
  )
}

export default Ppost