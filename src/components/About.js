import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app')
      .then((response) => response.json())
      .then((data) => {
        setPodcasts(data);
      })
      .catch((error) => {
        console.error('Error fetching podcast data:', error);
      });
  }, []);

  return (
    <div className="About">
      <h1>About</h1>
      {podcasts.length > 0 ? (
        <div className="podcast-grid">
          {podcasts.map((podcast, index) => (
            <div key={index} className="podcast-card">
              <img
                src={podcast.image}
                alt={podcast.title}
                className="podcast-image"
              />
              <p>
                <Link to={`/show/${podcast.id}`} className="podcast-title">
                  {podcast.title}
                </Link>
              </p>
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
