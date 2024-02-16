import React from 'react';
import { Link } from 'react-router-dom';

const Recommendation = () => {
  return (
    <div>
      <p>Upload data to get recommendations.</p>
      <Link to="/dataupload" className='btn'>Go to Data Upload Page</Link>
    </div>
  )
}

export default Recommendation
