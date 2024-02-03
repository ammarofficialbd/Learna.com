import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../../../UI/Pagination';
function PCard() {
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

        <div className="post flex" key={i}>
          <a href="/">
            <img src={item.img} alt="" />
          </a>
          <div className="postdetails">
            <div className="postlabel">
              <a href="/">{item.tag}</a>
            </div>
            <a href="/">
              <h2>
                {item.title}
              </h2>
            </a>
            <p>
             {item.desc}
            </p>
            <div className="posttimeteg flex">
              <div className="flex">
                <h5>
                  <span>#</span>Travel
                </h5>
                <h5>
                  <span>#</span>Lifestyle
                </h5>
              </div>
              <div className="tegtime">
                <h5 className="flex">
                  <i className="fa-regular fa-clock"></i>
                  <span>5</span>mins read
                </h5>
              </div>
            </div>
          </div>
        </div>

      ))}

        {   /* Render pagination component */}
    

    </>
  );
}

export default PCard;
