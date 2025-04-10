// Modal.js
import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, selectedStep, modalData }) => {
  useEffect(() => {
    if (modalData) {
      console.log('modalData in useEffect:', modalData);
    }
  }, [modalData]);

  return (
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
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#590070' }}>
        {modalData ? modalData.title : ''}
      </p>
      <p>{modalData ? modalData.description : ''}</p>

      {modalData && modalData.links && modalData.links.length > 0 && (
        <div>
          {modalData.links.map((filteredLink, index) => (
            <div key={index}>
              <a href={filteredLink.url} target="_blank" rel="noopener noreferrer">
                {filteredLink.link_title}
              </a>
            </div>
          ))}
        </div>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;