// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, selectedStep }) => (
  <div
    style={{
      display: isOpen ? 'block' : 'none',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      background: '#fff',
      boxShadow: '0px 4px 0px rgba(159, 106, 173, 0.25) inset',
      borderRadius: '12px',
      border: '1px #562D61 solid',
      zIndex: 999,
    }}
  >
    <p>{selectedStep ? selectedStep.title : ''}</p>
    <button onClick={() => onClose()}>Close</button>
  </div>
);

export default Modal;
