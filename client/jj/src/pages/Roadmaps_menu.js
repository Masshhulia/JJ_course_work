import React from 'react';
import { Link } from 'react-router-dom';
import QuizLink from '../components/QuizLink/QuizLink';
import Header from '../components/Header/Header';

const RoadmapsPage = () => {
  return (
    <main className="main">
        <Header/>
      <section className="roadmaps">
        <div className="title__quiz">
          <h2 className="quiz__text">Developer Roadmaps</h2>
        </div>
        <div className="subtitle__quiz">
          <h2 className="quiz__text2">Step by step guides and paths to learn different tools or technologies</h2>
        </div>
        <div className="line"></div>
        <div className="roadmaps__buttons">
          <div className="container_roadmap">
            <QuizLink to="/frontend" text="Frontend Developer" description="Step by step guide to becoming a modern frontend developer in 2023" />
          </div>
          <div className="container_roadmap">
            <QuizLink to="/backend" text="Backend Developer" description="Step by step guide to becoming a modern backend developer in 2023" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoadmapsPage;
