import React from 'react';

const ErrorIndicator = (error) => {
  return (
    <div>
      <img alt="error-sign"/>
      <span>{error}</span>
    </div>
  )
}

export default ErrorIndicator;
