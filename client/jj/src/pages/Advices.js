import React from 'react';
import Header from '../components/Header/Header';
import AdviceItem from '../components/AdviceItem/AdviceItem';

const Advices = () => {
  const adviceItems = [
    { text: "5 Free Resources to Master LLMs", url: "https://roadmap.sh/guides/free-resources-to-learn-llms" },
    { text: "Introduction to LLMs", url: "https://roadmap.sh/guides/introduction-to-llms" },
    { text: "Jump Servers: What, Why and How", url: "https://roadmap.sh/guides/how-to-setup-a-jump-server" },
    { text: "Guide to Let's Encrypt SSL Setup", url: "https://roadmap.sh/guides/setup-and-auto-renew-ssl-certificates" },
    { text: "Single Command Database Setup", url: "https://roadmap.sh/guides/single-command-database-setup" },
    { text: "Consistency Patterns", url: "https://roadmap.sh/guides/consistency-patterns-in-distributed-systems" },
    { text: "Session Based Authentication", url: "https://roadmap.sh/guides/session-based-authentication" },
    { text: "HTTP Basic Authentication", url: "https://roadmap.sh/guides/http-basic-authentication" },
    { text: "HTTP Basic Authentication", url: "https://roadmap.sh/guides/http-basic-authentication" },
    
  ];

  return (
    <main className="main">
         <Header />
      <section className="roadmaps">
       
        <div className="title__quiz">
          <h2 className="quiz__text">Advices</h2>
        </div>
        <div className="subtitle__quiz">
          <h2 className="quiz__text2">Succinct graphical explanations to engineering topics.</h2>
        </div>
        <div className="line"></div>
        <div className="advices-list">
          {adviceItems.map((item, index) => (
            <AdviceItem key={index} text={item.text} url={item.url} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Advices;


