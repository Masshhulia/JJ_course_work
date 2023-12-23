// Modal.js
import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, selectedStep, modalData, linksData }) => {
  console.log('Modal component is rendered!');
  console.log('modalData in Modal component:', modalData);
  console.log('linksData in Modal component:', linksData);


  useEffect(() => {
    console.log('Modal component is re-rendered!');
    console.log('modalData in useEffect:', modalData);
    console.log('linksData in useEffect:', linksData);
    console.log('modalData in useEffect:', modalData);
    console.log('linksData in useEffect:', linksData);
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

      {linksData && linksData.length > 0 && modalData && ( 
  <div>
      {linksData
        .filter((link) => link.pages_ID === modalData.page_ID) 
        .map((filteredLink) => (
          <div key={filteredLink.link_ID}>
            <a href={filteredLink.url} target="_blank" rel="noopener noreferrer">
              {filteredLink.link_title}
            </a>
          </div>
        ))}
    </div>
  )}
      <button onClick={() => onClose()}>Close</button>
    </div>
  );
};

export default Modal;
