import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Ecard() {
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
         <div className="edcard" key={i}>
                <a href="/">
                    <img src={item.img} alt=""/>
                    <div className="edcarddetl">
                        <div className="tegtime flex">
                            <h5>{item.tag}</h5>
                            <h5 className="flex">
                                <i className="fa-regular fa-clock"></i>
                                <span>5</span>mins read
                            </h5>
                        </div>
                        <a href="/">
                            <h2>{item.title.split(/\s+/).slice(0, 8).join(" ")}...</h2>
                        </a>
                        <div className="postby flex">
                            <div className="flex authorbx">
                                <img src={item.authorImg} alt="" style={{width: '50px', height:'50px'}}/>
                                <div className="authorname">
                                    <h4>Coder</h4>
                                    <span>23 August 2023</span>
                                </div>
                            </div>
                            <a href="/" className="readmore"><span>Read more</span></a>
                        </div>
                    </div>
                </a>
            </div>
            ))}
    </>
  )
}

export default Ecard