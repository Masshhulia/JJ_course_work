// Button.js
import React from 'react';

const Button = ({ left, top, label, onClick, style }) => (
  <div
    style={{
      width: '174.57px',
      height: '68.49px',
      left: `${left}px`,
      top: `${top}px`,
      position: 'absolute',
    }}
  >
    <button
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        textAlign: 'center',
        color: '#1E0025',
        fontSize: '20px',
        fontFamily: 'Didact Gothic',
        fontWeight: 400,
        wordWrap: 'break-word',
        background: style.background || '#8B8BE04F', // Используем переданный стиль
        boxShadow: '0px 4px 0px rgba(159, 106, 173, 0.25) inset',
        borderRadius: '12px',
        border: '1px #562D61 solid',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {label}
    </button>
  </div>
);

export default Button;