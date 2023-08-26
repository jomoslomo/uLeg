import React from 'react';
import './styles/Home.css';

import Button from 'react-bootstrap/Button';


const Home = () => {
  return (
    <div className="home-container">
      <h1>Student Government Legislation Platform</h1>
      <p>
        Welcome to our platform, where student government members can propose, draft, and vote on legislation that will shape our campus community.
      </p>
      <Button variant="secondary">Get Started</Button>
    </div>
  );
};

export default Home;
