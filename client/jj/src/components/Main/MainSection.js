import React from 'react';

const MainSection = () => {
  return (
    <main className="main">
      <section className="top">
        <div className="container">
          <h1 className="title">
            Juniors Journey - твой путь к изучению новых технологий
          </h1>
          <h2 className="subtitle">
            Путеводитель по миру кода: следуйте своему пути с помощью наших дорожных карт!
          </h2>
          <a href="#create" className="start__link">
            Начни изучение сейчас
          </a>
        </div>
      </section>
      <div className="back__image" style={{ backgroundImage: 'url(images/road.svg)' }}></div>
    </main>
  );
};

export default MainSection;

