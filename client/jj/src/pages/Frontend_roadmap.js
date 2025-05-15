import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Button from '../components/RoadmapButton/RoadmapButton';
import Modal from '../components/Modal/Modal';
import { getRoadmapsNamesByID } from '../http/roadmapStepsAPI';

const FrontendRoadmap = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [roadmap, setRoadmap] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [roadmapTitle, setRoadmapTitle] = useState('');
  const [completedSteps, setCompletedSteps] = useState([]);

  const roadmapId = localStorage.getItem('selectedRoadmapId') || 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const roadmapData = await getRoadmapsNamesByID(roadmapId);
        setRoadmap(roadmapData);
        setRoadmapTitle(roadmapData.RoadmapName_name);
        
        const savedProgress = JSON.parse(localStorage.getItem('completedSteps')) || [];
        setCompletedSteps(savedProgress.filter(step => step !== null));
        console.log('Loaded completed steps:', savedProgress);
      } catch (error) {
        console.error('Error fetching roadmap data:', error.message);
      }
    };

    fetchData();
  }, [roadmapId]);

  const handleButtonClick = (step) => {
    console.log('Button clicked for step:', step);
    setSelectedStep(step);
    
    if (step.RoadmapsPages.length > 0) {
      const pageData = step.RoadmapsPages[0];
      setModalData({
        ...pageData,
        links: pageData.RoadmapsLinks,
      });
      setModalOpen(true);
    }
  };

  const handleStepCompletion = (stepId) => {
  if (stepId) {
    const updatedSteps = [...new Set([...completedSteps, stepId])];
    setCompletedSteps(updatedSteps);
    localStorage.setItem('completedSteps', JSON.stringify(updatedSteps));
    console.log('Updated completed steps:', updatedSteps);
  }
};

  const handleModalClose = () => {
    setModalOpen(false); 
  };

  if (!roadmap) return <div>Loading...</div>;

  return (
    <main className="main">
      <Header />
      <div style={{ width: '1440px', height: '1817px', position: 'relative', background: 'white' }}>
        <div style={{ width: '500px', height: '59px', left: '470px', top: '147px', position: 'absolute', textAlign: 'center' }}>
          <span style={{ color: 'black', fontSize: '40px', fontFamily: 'Didact Gothic', fontWeight: 400 }}>
            {roadmapTitle}
          </span>
        </div>
        
        <div style={{ height: '244.49px', left: '633px', top: '312.44px', position: 'absolute' }}>
          {roadmap.Roadmaps.map((step, index) => {
            const isCompleted = completedSteps.includes(step.roadmap_ID);
            console.log(`Step ID: ${step.roadmap_ID}, Completed: ${isCompleted}`); // Логирование статуса шага
            return (
              <div key={index}>
                <Button
                  left={0}
                  top={index * 176}
                  label={step.title}
                  onClick={() => handleButtonClick(step)}
                  style={{
                    background: isCompleted ? 'lightgray' : '#8B8BE04F',
                    
                  }}
                />
                <div style={{
                    position: 'absolute',
                    left: '85px',
                    top: `${(index + 1) * 176 - 80}px`,
                    width: '2px',
                    height: '50px',
                    background: 'transparent',
                    borderLeft: '2px dashed #1E0025',
                    transform: 'translateX(50%)',
                  }} />
              </div>
            );
          })}
        </div>

        <Modal 
          isOpen={isModalOpen} 
          onClose={handleModalClose} 
          selectedStep={selectedStep} 
          modalData={modalData} 
          onStepCompleted={handleStepCompletion} 
        />
      </div>
    </main>
  );
};

export default FrontendRoadmap;