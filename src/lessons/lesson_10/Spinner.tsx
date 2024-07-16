import React from 'react';
import './Spinner.module.css'; 

const Spinner: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <div className="spinner" />
    </div>
  );
};

export default Spinner;

