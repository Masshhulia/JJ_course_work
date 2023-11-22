import React,  { useState } from 'react';
import Header from '../components/Header/Header';
import Button from '../components/RoadmapButton/RoadmapButton';
import Modal from '../components/Modal/Modal';



const FrontendRoadmap = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="main">
        <Header/>
      <div style={{ width: '1440px', height: '1817px', position: 'relative', background: 'white' }}>
        <div style={{ width: '358px', height: '59px', left: '541px', top: '147px', position: 'absolute', textAlign: 'center' }}>
          <span style={{ color: '#590070', fontSize: '40px', fontFamily: 'Didact Gothic', fontWeight: 400, wordWrap: 'break-word' }}>Front-end</span>
          <span style={{ color: 'black', fontSize: '40px', fontFamily: 'Didact Gothic', fontWeight: 400, wordWrap: 'break-word' }}> Developer</span>
        </div>
        <div style={{ height: '244.49px', left: '633px', top: '312.44px', position: 'absolute' }}>
          <div style={{ width: '174.57px', height: '68.49px', left: '0px', top: '0px', position: 'absolute' }}>
           
           <div>
          <Button
            left={0}
            top={0}
            label="HTML"
            onClick={() => console.log('HTML button clicked')}
            onModalOpen={setModalOpen}
          />
          <Modal isOpen={isModalOpen} onClose={setModalOpen} />
    </div>
          </div>
          <div style={{ width: '174.57px', height: '68.49px', left: '0px', top: '176px', position: 'absolute' }}>
           
            <Button
            left={0}
            top={0}
            label="CSS"
            onClick={() => console.log('HTML button clicked')}
            onModalOpen={setModalOpen}
          />
          <Modal isOpen={isModalOpen} onClose={setModalOpen} />
          </div>
          <div style={{ width: '80px', height: '0px', left: '86.96px', top: '82px', position: 'absolute', transform: 'rotate(90.46deg)', transformOrigin: '0 0', border: '2px #1E0025 dotted' }}></div>
        </div>
        <div style={{ width: '80px', height: '0px', left: '719.64px', top: '571px', position: 'absolute', transform: 'rotate(90.46deg)', transformOrigin: '0 0', border: '2px #1E0025 dotted' }}></div>
        <div style={{ width: '120px', height: '0px', left: '438.32px', top: '981px', position: 'absolute', border: '2px #1E0025 dotted' }}></div>
        <div style={{ width: '161px', height: '0px', left: '719.83px', top: '1034px', position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '2px #1E0025 dotted' }}></div>
        <div style={{ width: '80px', height: '0px', left: '1075px', top: '1386px', position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '2px #1E0025 dotted' }}></div>
        <div style={{ width: '180px', height: '0px', left: '718px', top: '837px', position: 'absolute', border: '2px #1E0025 dotted' }}></div>
        <div style={{ width: '180px', height: '0px', left: '720px', top: '1434px', position: 'absolute', border: '2px #1E0025 dotted' }}></div>
        <div style={{ width: '180px', height: '0px', left: '718.64px', top: '747px', position: 'absolute', transform: 'rotate(90.46deg)', transformOrigin: '0 0', border: '2px #1E0025 dotted' }}></div>
        <div style={{ width: '365.01px', height: '0px', left: '717.86px', top: '1292px', position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '2px #1E0025 dotted' }}></div>
        <div style={{ width: '174.57px', height: '68.49px', left: '633px', top: '664px', position: 'absolute' }}>
          
          <Button
            left={0}
            top={0}
            label="JavaScript"
            onClick={() => console.log('HTML button clicked')}
            onModalOpen={setModalOpen}
          />
          <Modal isOpen={isModalOpen} onClose={setModalOpen} />
        </div>
        <div style={{ width: '174.57px', height: '68.49px', left: '919px', top: '803px', position: 'absolute' }}>
          
          <Button
            left={0}
            top={0}
            label="GIT"
            onClick={() => console.log('HTML button clicked')}
            onModalOpen={setModalOpen}
          />
          <Modal isOpen={isModalOpen} onClose={setModalOpen} />
        </div>
        <div style={{ width: '174.57px', height: '68.49px', left: '988px', top: '1224px', position: 'absolute' }}>
          <div style={{ width: '174.57px', height: '68.49px', left: '0px', top: '0px', position: 'absolute', background: '#CCEDFF', boxShadow: '0px 4px 0px rgba(159, 106, 173, 0.25) inset', borderRadius: '12px', border: '1px #562D61 solid' }}></div>
          <Button
            left={0}
            top={0}
            label="Tailwind"
            onClick={() => console.log('HTML button clicked')}
            onModalOpen={setModalOpen}
          />
          <Modal isOpen={isModalOpen} onClose={setModalOpen} />
        </div>
        <div style={{ width: '174.57px', height: '68.49px', left: '239px', top: '947px', position: 'absolute' }}>
          <div style={{ width: '174.57px', height: '68.49px', left: '0px', top: '0px', position: 'absolute', background: '#CCEDFF', boxShadow: '0px 4px 0px rgba(159, 106, 173, 0.25) inset', borderRadius: '12px', border: '1px #562D61 solid' }}></div>
          <Button
            left={0}
            top={0}
            label="npm"
            onClick={() => console.log('HTML button clicked')}
            onModalOpen={setModalOpen}
          />
          <Modal isOpen={isModalOpen} onClose={setModalOpen} />
        </div>
        <div style={{ width: '120px', height: '0px', left: '414px', top: '1714px', position: 'absolute', border: '2px #1E0025 dotted' }}></div>
        <div style={{ width: '174.57px', height: '68.49px', left: '217px', top: '1680px', position: 'absolute' }}>
        <div style={{ width: '174.57px', height: '68.49px', left: '0px', top: '0px', position: 'absolute', background: '#CCEDFF', boxShadow: '0px 4px 0px rgba(159, 106, 173, 0.25) inset', borderRadius: '12px', border: '1px #562D61 solid' }}></div>
        <Button
            left={0}
            top={0}
            label="Jest"
            onClick={() => console.log('HTML button clicked')}
            onModalOpen={setModalOpen}
          />
          <Modal isOpen={isModalOpen} onClose={setModalOpen} />
        </div>
        <div style={{ width: '160px', height: '0px', left: '438px', top: '1243px', position: 'absolute', border: '2px #1E0025 dotted' }}></div>
        <div style={{ width: '174.57px', height: '68.49px', left: '239px', top: '1209px', position: 'absolute' }}>
        <div style={{ width: '174.57px', height: '68.49px', left: '0px', top: '0px', position: 'absolute', background: '#CCEDFF', boxShadow: '0px 4px 0px rgba(159, 106, 173, 0.25) inset', borderRadius: '12px', border: '1px #562D61 solid' }}></div>
        <Button
            left={0}
            top={0}
            label="React"
            onClick={() => console.log('HTML button clicked')}
            onModalOpen={setModalOpen}
          />
          <Modal isOpen={isModalOpen} onClose={setModalOpen} />
        </div>
        <div style={{ width: '292.53px', height: '78.76px', left: '573px', top: '941px', position: 'absolute' }}>
        
        <Button
            left={60}
            top={0}
            label="Package Managers"
            onClick={() => console.log('HTML button clicked')}
            onModalOpen={setModalOpen}
          />
          <Modal isOpen={isModalOpen} onClose={setModalOpen} />
        </div>
        <div style={{ width: '174.57px', height: '68.49px', left: '630px', top: '1209px', position: 'absolute' }}>
        
        <Button
            left={0}
            top={0}
            label="Framework"
            onClick={() => console.log('HTML button clicked')}
            onModalOpen={setModalOpen}
          />
          <Modal isOpen={isModalOpen} onClose={setModalOpen} />
        </div>
        <div style={{ width: '322.41px', height: '68.49px', left: '914px', top: '1400px', position: 'absolute' }}>
        
        <Button
            left={0}
            top={0}
            label="CSS Framework"
            onClick={() => console.log('HTML button clicked')}
            onModalOpen={setModalOpen}
          />
          <Modal isOpen={isModalOpen} onClose={setModalOpen} />
        </div>
        <div style={{ width: '322.41px', height: '68.49px', left: '556px', top: '1672px', position: 'absolute' }}>
       
        <Button
            left={60}
            top={0}
            label="Testing your Apps"
            onClick={() => console.log('HTML button clicked')}
            onModalOpen={setModalOpen}
          />
          <Modal isOpen={isModalOpen} onClose={setModalOpen} />
        </div>
        

      </div>
    </main>
  );
}

export default FrontendRoadmap;
