// Checkbox.js
import React, { useState } from 'react';

const Checkbox = ({ isChecked, onChange }) => {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        style={{ display: 'none' }}
      />
      <div className="checkbox" style={{ backgroundColor: isChecked ? '#1DC9A0' : 'transparent' }}>
        {isChecked && (
          <div className="checkmark">
            <div></div>
          </div>
        )}
      </div>
    </label>
  );
};

export default Checkbox;
