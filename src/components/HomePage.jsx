  
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
        <h1>Welcome Home</h1>
        <h2>Click the link below to get to see other things <Link to= "/navigation">here</Link>
        </h2>
    </div>
  );
};

export default HomePage;