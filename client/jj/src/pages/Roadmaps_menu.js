import React, { useEffect, useState } from 'react';
import QuizLink from '../components/QuizLink/QuizLink';
import Header from '../components/Header/Header';
import { getRoadmapsNamesFromDatabase } from '../http/roadmapStepsAPI'; // Импортируйте ваш API

const RoadmapsPage = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const data = await getRoadmapsNamesFromDatabase();
        setRoadmaps(data); // Установите загруженные данные
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmaps();
  }, []);

  const handleRoadmapClick = (roadmapId) => {
    localStorage.setItem('selectedRoadmapId', roadmapId); // Сохраняем ID в локальное хранилище
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="main">
      <Header />
      <section className="roadmaps">
        <div className="title__quiz">
          <h2 className="quiz__text">Developer Roadmaps</h2>
        </div>
        <div className="subtitle__quiz">
          <h2 className="quiz__text2">Step by step guides and paths to learn different tools or technologies</h2>
        </div>
        <div className="line"></div>
        <div className="roadmaps__buttons">
        {roadmaps.map((roadmap) => (
        <div className="container_roadmap" key={roadmap.RoadmapName_id}>
         <QuizLink 
         to={`/frontend`} 
        text={roadmap.RoadmapName_name} 
        description={roadmap.RoadmapName_description} 
        testId={roadmap.TestId} // Убедитесь, что это правильное поле
        roadmapId={roadmap.RoadmapName_id} // Убедитесь, что это правильное поле
       />
       </div>
        ))}
        </div>
      </section>
    </main>
  );
};

export default RoadmapsPage;