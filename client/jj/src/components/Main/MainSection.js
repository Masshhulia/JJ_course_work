import React from 'react';

const MainSection = () => {
  return (
    <main className="main">
      <section className="top">
        <div className="container">
          <h1 className="title">
            Juniors Journey - it’s your way to study new technologies
          </h1>
          <h2 className="subtitle">
            Guide to the world of code: follow your path with our Roadmaps!
          </h2>
          <a href="#create" className="start__link">
            Start learning now
          </a>
        </div>
      </section>
      <div className="back__image" style={{ backgroundImage: 'url(images/road.svg)' }}></div>
    </main>
  );
};

export default MainSection;

