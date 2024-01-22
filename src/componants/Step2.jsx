import React from 'react';

const Step2 = ({ onNext }) => {
  return (
    <div>
      <label>Field 2:</label>
      <input type="text" placeholder="Enter Last Name" />
      <button onClick={onNext}>Next</button>
    </div>
  );
};
export default Step2