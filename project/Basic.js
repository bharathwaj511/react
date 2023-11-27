// Basic.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Basic.css'; // Import the CSS file

export default function Basic() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="item" onClick={() => navigate('/t')}>
        TRANSPORT
      </div>
      <div className="item" onClick={() => navigate('/g')}>
        GOVERNMENT
      </div>
      <div className="item" onClick={() => navigate('/p')}>
        EDUCATION
      </div>
      <div className="item" onClick={() => navigate('/f')}>
        FARMING
      </div>
    </div>
  );
}
