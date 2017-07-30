import React from 'react';

import '../css/loading.css';

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-container">
        <img src="loading.gif" alt="Loading" className="loading-image" />
      </div>
    </div>
  );
};

export default Loading;
