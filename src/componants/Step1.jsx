import React from 'react';

const Step1 = ({ onNext }) => {
  return (
    <div>
      <label>Field 1:</label>
      <input type="text" placeholder="Enter Name"  />
      <button onClick={onNext}>Next</button>
    </div>
  );
};
export default Step1