// Checkbox.js
import React from 'react';

const Checkbox = ({ id, isChecked = false, onChange }) => {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange(id)}
        style={{ display: 'none' }}
      />
      <div className="checkbox" style={{ backgroundColor: isChecked ? '#1DC9A0' : 'transparent',  borderRadius: '50%'  }}>
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
