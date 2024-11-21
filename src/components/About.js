import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  // State to store the podcast data
  const [podcasts, setPodcasts] = useState([]);

  // Fetch the podcast data when the component mounts
  useEffect(() => {
    // Fetch data from the API
    fetch('https://podcast-api.netlify.app')
      .then((response) => response.json())
      .then((data) => {
        // Store the podcasts data in the state
        setPodcasts(data);
      })
      .catch((error) => {
        console.error('Error fetching podcast data:', error);
      });
  }, []);

  return (
    <div className="About">
      <h1>WFO2407's Podcast app</h1>
      {/* Conditionally render podcasts */}
      {podcasts.length > 0 ? (
        <div className="podcast-grid">
          {podcasts.map((podcast, index) => (
            <div key={index} className="podcast-card">
              <img
                src={podcast.image}
                alt={podcast.title}
                className="podcast-image"
              />
              <p>{podcast.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading podcast titles...</p>
      )}
    </div>
  );
}

export default About;
