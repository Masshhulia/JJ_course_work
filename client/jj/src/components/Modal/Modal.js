import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, selectedStep, modalData, onStepCompleted }) => {
  useEffect(() => {
    if (modalData) {
      console.log('modalData in useEffect:', modalData);
    }
  }, [modalData]);

  console.log('Selected step in Modal:', selectedStep); // Логирование выбранного шага

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
       <button
  style={{
    height:'30px',
    width:'80px',
    fontSize: '14px',
    fontWeight: 'normal',
    color: 'white',
    background:'#9ACD32',
    borderRadius: '4px',
    marginLeft: '520px' // Увеличьте значение, чтобы сместить кнопку дальше вправо
  }}
  onClick={() => {
    if (selectedStep && selectedStep.roadmap_ID) {
      console.log('Step completed for ID:', selectedStep.roadmap_ID);
      onStepCompleted(selectedStep.roadmap_ID);
    } else {
      console.error('No selected step available');
    }
    onClose();
  }}
>
  Пройдено
</button>
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
      
      
 <button style={{marginTop:'20px' }}onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;