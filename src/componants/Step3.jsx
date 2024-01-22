import React from 'react';

const Step3 = ({ onSubmit }) => {
  return (
    <div>
      <label>Field 3:</label>
      <input type="text" placeholder="Enter Email" />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};
 export default Step3