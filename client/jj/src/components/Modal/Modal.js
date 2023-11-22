// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose }) => (
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
    <p>Interfaces are a legacy of older versions of C#, and are interchangeable with the newer abstract class feature.
 When you need a list of capabilities and data that are classes-agnostic, use an interface. When you need a certain object type to share characteristics, use an abstract class.
 You should use both an interface and an abstract class when defining any complex object.
    </p>
    <button onClick={() => onClose(false)}>Close</button>
  </div>
);

export default Modal;
