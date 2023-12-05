// import React,  { useState } from 'react';
// import Header from '../components/Header/Header';
// import Button from '../components/RoadmapButton/RoadmapButton';
// import Modal from '../components/Modal/Modal';



// const FrontendRoadmap = () => {

//   const [isModalOpen, setModalOpen] = useState(false);

//   return (
//     <main className="main">
//         <Header/>
//       <div style={{ width: '1440px', height: '1817px', position: 'relative', background: 'white' }}>
//         <div style={{ width: '358px', height: '59px', left: '541px', top: '147px', position: 'absolute', textAlign: 'center' }}>
//           <span style={{ color: '#590070', fontSize: '40px', fontFamily: 'Didact Gothic', fontWeight: 400, wordWrap: 'break-word' }}>Front-end</span>
//           <span style={{ color: 'black', fontSize: '40px', fontFamily: 'Didact Gothic', fontWeight: 400, wordWrap: 'break-word' }}> Developer</span>
//         </div>
//         <div style={{ height: '244.49px', left: '633px', top: '312.44px', position: 'absolute' }}>
//           <div style={{ width: '174.57px', height: '68.49px', left: '0px', top: '0px', position: 'absolute' }}>
           
//            <div>
//           <Button
//             left={0}
//             top={0}
//             label="HTML"
//             onClick={() => console.log('HTML button clicked')}
//             onModalOpen={setModalOpen}
//           />
//           <Modal isOpen={isModalOpen} onClose={setModalOpen} />
//     </div>
//           </div>
//           <div style={{ width: '174.57px', height: '68.49px', left: '0px', top: '176px', position: 'absolute' }}>
           
//             <Button
//             left={0}
//             top={0}
//             label="CSS"
//             onClick={() => console.log('HTML button clicked')}
//             onModalOpen={setModalOpen}
//           />
//           <Modal isOpen={isModalOpen} onClose={setModalOpen} />
//           </div>
//           <div style={{ width: '80px', height: '0px', left: '86.96px', top: '82px', position: 'absolute', transform: 'rotate(90.46deg)', transformOrigin: '0 0', border: '2px #1E0025 dotted' }}></div>
//         </div>
//         <div style={{ width: '80px', height: '0px', left: '719.64px', top: '571px', position: 'absolute', transform: 'rotate(90.46deg)', transformOrigin: '0 0', border: '2px #1E0025 dotted' }}></div>
//         <div style={{ width: '120px', height: '0px', left: '438.32px', top: '981px', position: 'absolute', border: '2px #1E0025 dotted' }}></div>
//         <div style={{ width: '161px', height: '0px', left: '719.83px', top: '1034px', position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '2px #1E0025 dotted' }}></div>
//         <div style={{ width: '80px', height: '0px', left: '1075px', top: '1386px', position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '2px #1E0025 dotted' }}></div>
//         <div style={{ width: '180px', height: '0px', left: '718px', top: '837px', position: 'absolute', border: '2px #1E0025 dotted' }}></div>
//         <div style={{ width: '180px', height: '0px', left: '720px', top: '1434px', position: 'absolute', border: '2px #1E0025 dotted' }}></div>
//         <div style={{ width: '180px', height: '0px', left: '718.64px', top: '747px', position: 'absolute', transform: 'rotate(90.46deg)', transformOrigin: '0 0', border: '2px #1E0025 dotted' }}></div>
//         <div style={{ width: '365.01px', height: '0px', left: '717.86px', top: '1292px', position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '2px #1E0025 dotted' }}></div>
//         <div style={{ width: '174.57px', height: '68.49px', left: '633px', top: '664px', position: 'absolute' }}>
          
//           <Button
//             left={0}
//             top={0}
//             label="JavaScript"
//             onClick={() => console.log('HTML button clicked')}
//             onModalOpen={setModalOpen}
//           />
//           <Modal isOpen={isModalOpen} onClose={setModalOpen} />
//         </div>
//         <div style={{ width: '174.57px', height: '68.49px', left: '919px', top: '803px', position: 'absolute' }}>
          
//           <Button
//             left={0}
//             top={0}
//             label="GIT"
//             onClick={() => console.log('HTML button clicked')}
//             onModalOpen={setModalOpen}
//           />
//           <Modal isOpen={isModalOpen} onClose={setModalOpen} />
//         </div>
//         <div style={{ width: '174.57px', height: '68.49px', left: '988px', top: '1224px', position: 'absolute' }}>
//           <div style={{ width: '174.57px', height: '68.49px', left: '0px', top: '0px', position: 'absolute', background: '#CCEDFF', boxShadow: '0px 4px 0px rgba(159, 106, 173, 0.25) inset', borderRadius: '12px', border: '1px #562D61 solid' }}></div>
//           <Button
//             left={0}
//             top={0}
//             label="Tailwind"
//             onClick={() => console.log('HTML button clicked')}
//             onModalOpen={setModalOpen}
//           />
//           <Modal isOpen={isModalOpen} onClose={setModalOpen} />
//         </div>
//         <div style={{ width: '174.57px', height: '68.49px', left: '239px', top: '947px', position: 'absolute' }}>
//           <div style={{ width: '174.57px', height: '68.49px', left: '0px', top: '0px', position: 'absolute', background: '#CCEDFF', boxShadow: '0px 4px 0px rgba(159, 106, 173, 0.25) inset', borderRadius: '12px', border: '1px #562D61 solid' }}></div>
//           <Button
//             left={0}
//             top={0}
//             label="npm"
//             onClick={() => console.log('HTML button clicked')}
//             onModalOpen={setModalOpen}
//           />
//           <Modal isOpen={isModalOpen} onClose={setModalOpen} />
//         </div>
//         <div style={{ width: '120px', height: '0px', left: '414px', top: '1714px', position: 'absolute', border: '2px #1E0025 dotted' }}></div>
//         <div style={{ width: '174.57px', height: '68.49px', left: '217px', top: '1680px', position: 'absolute' }}>
//         <div style={{ width: '174.57px', height: '68.49px', left: '0px', top: '0px', position: 'absolute', background: '#CCEDFF', boxShadow: '0px 4px 0px rgba(159, 106, 173, 0.25) inset', borderRadius: '12px', border: '1px #562D61 solid' }}></div>
//         <Button
//             left={0}
//             top={0}
//             label="Jest"
//             onClick={() => console.log('HTML button clicked')}
//             onModalOpen={setModalOpen}
//           />
//           <Modal isOpen={isModalOpen} onClose={setModalOpen} />
//         </div>
//         <div style={{ width: '160px', height: '0px', left: '438px', top: '1243px', position: 'absolute', border: '2px #1E0025 dotted' }}></div>
//         <div style={{ width: '174.57px', height: '68.49px', left: '239px', top: '1209px', position: 'absolute' }}>
//         <div style={{ width: '174.57px', height: '68.49px', left: '0px', top: '0px', position: 'absolute', background: '#CCEDFF', boxShadow: '0px 4px 0px rgba(159, 106, 173, 0.25) inset', borderRadius: '12px', border: '1px #562D61 solid' }}></div>
//         <Button
//             left={0}
//             top={0}
//             label="React"
//             onClick={() => console.log('HTML button clicked')}
//             onModalOpen={setModalOpen}
//           />
//           <Modal isOpen={isModalOpen} onClose={setModalOpen} />
//         </div>
//         <div style={{ width: '292.53px', height: '78.76px', left: '573px', top: '941px', position: 'absolute' }}>
        
//         <Button
//             left={60}
//             top={0}
//             label="Package Managers"
//             onClick={() => console.log('HTML button clicked')}
//             onModalOpen={setModalOpen}
//           />
//           <Modal isOpen={isModalOpen} onClose={setModalOpen} />
//         </div>
//         <div style={{ width: '174.57px', height: '68.49px', left: '630px', top: '1209px', position: 'absolute' }}>
        
//         <Button
//             left={0}
//             top={0}
//             label="Framework"
//             onClick={() => console.log('HTML button clicked')}
//             onModalOpen={setModalOpen}
//           />
//           <Modal isOpen={isModalOpen} onClose={setModalOpen} />
//         </div>
//         <div style={{ width: '322.41px', height: '68.49px', left: '914px', top: '1400px', position: 'absolute' }}>
        
//         <Button
//             left={0}
//             top={0}
//             label="CSS Framework"
//             onClick={() => console.log('HTML button clicked')}
//             onModalOpen={setModalOpen}
//           />
//           <Modal isOpen={isModalOpen} onClose={setModalOpen} />
//         </div>
//         <div style={{ width: '322.41px', height: '68.49px', left: '556px', top: '1672px', position: 'absolute' }}>
       
//         <Button
//             left={60}
//             top={0}
//             label="Testing your Apps"
//             onClick={() => console.log('HTML button clicked')}
//             onModalOpen={setModalOpen}
//           />
//           <Modal isOpen={isModalOpen} onClose={setModalOpen} />
//         </div>
        

//       </div>
//     </main>
//   );
// }


// FrontendRoadmap.js
// FrontendRoadmap.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Button from '../components/RoadmapButton/RoadmapButton';
import Modal from '../components/Modal/Modal';
import { getStepsFromDatabase } from '../http/roadmapStepsAPI';
import { getRoadmapPageFromDatabase } from '../http/roadmapsPGApi';
import { getLinksForPageFromDatabase } from '../http/roamapsLinksApi';
import { getAllLinksFromDatabase } from '../http/roamapsLinksApi';

const FrontendRoadmap = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [steps, setSteps] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [linksData, setLinksData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stepsFromDB = await getStepsFromDatabase();
        setSteps(stepsFromDB);
  
        const linksFromDB = await getAllLinksFromDatabase(); 
        setLinksData(linksFromDB);
  
        if (selectedStep) {
          const pageData = await getRoadmapPageFromDatabase(selectedStep.roadmap_ID);
          console.log('Page data before setModalData:', pageData);
          setModalData(pageData);
          setModalOpen(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [selectedStep]);

  const handleButtonClick = async (step) => {
    console.log('Handling button click with step:', step);
    console.log('Step data:', step);
  
    setSelectedStep(step);
  
    try {
      if (step.roadmap_ID !== undefined) {
        const linksForPage = await getLinksForPageFromDatabase(step.roadmap_ID);
  
        if (linksForPage.length > 0) {
       
          const filteredLinks = linksForPage.filter(link => link.pages_ID === step.page_ID);
          setModalData({ ...step, links: filteredLinks });
          setModalOpen(true);
        } else {
          console.error('No links found for the selected step.');
        }
      } else {
        console.error('roadmap_ID is undefined or null.');
      }
    } catch (error) {
      console.error('Error fetching data for the modal:', error.message);
    }
  };

  const handleModalClose = () => {
    setSelectedStep(null);
    setModalData(null);
    setModalOpen(false);
  };

  return (
    <main className="main">
      <Header />
      <div style={{ width: '1440px', height: '1817px', position: 'relative', background: 'white' }}>
        <div style={{ width: '358px', height: '59px', left: '541px', top: '147px', position: 'absolute', textAlign: 'center' }}>
          <span style={{ color: '#590070', fontSize: '40px', fontFamily: 'Didact Gothic', fontWeight: 400, wordWrap: 'break-word' }}>Front-end</span>
          <span style={{ color: 'black', fontSize: '40px', fontFamily: 'Didact Gothic', fontWeight: 400, wordWrap: 'break-word' }}> Developer</span>
        </div>
        
        <div style={{ height: '244.49px', left: '633px', top: '312.44px', position: 'absolute' }}>
        
          {steps.map((step, index) => (
            <div key={index}>
              <Button
                left={0}
                top={index * 176}
                label={step.title}
                onClick={() => {
                  console.log('Step data:', step);
                  handleButtonClick(step);
                }}
                onModalOpen={handleModalClose}
              />
              {index < steps.length - 1 && (
                <div style={{ width: '2px', height: '50px', transform: 'rotate(0deg)', transformOrigin: '0 0', border: '2px #1E0025 dotted', top: '1000px' }}></div>
              )}
            </div>
          ))}
        </div>
        <Modal isOpen={isModalOpen} onClose={handleModalClose} selectedStep={selectedStep} modalData={modalData} linksData={linksData} />
      </div>
    </main>
  );
};

export default FrontendRoadmap;