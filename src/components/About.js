import React, { useEffect, useState } from 'react';
import './About.css';

function About() {
  // State to store the list of podcasts
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Use useEffect to make the API call when the component mounts
  useEffect(() => {
    const fetchPodcastData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch('https://podcast-api.netlify.app');

        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse JSON response

        // Check if there are podcasts and update state
        if (data && data.length > 0) {
          setPodcasts(data); // Set the podcast data
        } else {
          setPodcasts([]); // No podcasts found
        }
      } catch (error) {
        console.error('Error fetching podcast data:', error);
        setPodcasts([]); // Set empty array if there's an error
      } finally {
        setIsLoading(false); // Stop loading once the request is done
      }
    };

    // Call the fetch function
    fetchPodcastData();
  }, []); // Empty dependency array to only run on component mount

  return (
    <div className="About">
      <h1>WFO2407's Podcast App</h1>

      {isLoading ? (
        <p>Loading podcasts...</p> // Display loading message while waiting for the data
      ) : podcasts.length > 0 ? (
        <div className="podcast-grid">
          {podcasts.map((podcast, index) => (
            <div key={index} className="podcast-item">
              <img src={podcast.image} alt={`Podcast ${index + 1}`} />
            </div>
          ))}
        </div>
      ) : (
        <p>No podcasts found.</p> // Message when no podcasts are available
      )}
    </div>
  );
}

export default About;
