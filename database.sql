CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR (50),
    last_name VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    job VARCHAR(255),
    linked_in VARCHAR(255),
    RegistrationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    documents TEXT
);

CREATE TABLE UsageDays (
    user_id INT REFERENCES users(id),
    usage_date DATE,
    PRIMARY KEY (user_id, usage_date)
);

CREATE TABLE Roadmaps (
    roadmap_ID SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

CREATE TABLE CompletedRoadmaps (
    user_id INT REFERENCES users(id),
    roadmap_ID INT REFERENCES Roadmaps(roadmap_ID),
    completion_date DATE,
    PRIMARY KEY (user_id, roadmap_ID)
);

CREATE TABLE Achievements (
    achievement_ID SERIAL PRIMARY KEY,
    achievement_name VARCHAR(255) NOT NULL
);

CREATE TABLE UserAchievements (
    user_id INT REFERENCES users(id),
    achievements_ID INT REFERENCES Achievements(achievement_ID),
    achievement_date DATE,
    PRIMARY KEY (user_id, achievements_ID)
);

CREATE TABLE RoadmapsPages (
    page_ID SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE RoadmapsLinks (
    link_ID SERIAL PRIMARY KEY,
    pages_ID INT REFERENCES RoadmapsPages( page_ID),
    link_title VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL
);

CREATE TABLE Questions (
    question_ID SERIAL PRIMARY KEY,
    question_text TEXT NOT NULL,
    test_id INT REFERENCES Tests(test_ID)
);

CREATE TABLE Options (
    option_ID SERIAL PRIMARY KEY,
    questions_ID INT REFERENCES Questions(question_ID),
    option_text TEXT NOT NULL,
    isCorrect BOOLEAN
);

CREATE TABLE Tests (
    test_ID SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    Description TEXT
    );

CREATE TABLE TestResults (
    result_ID SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    tests_ID INT REFERENCES Tests(test_ID),
    score INT,
    test_date DATE DEFAULT CURRENT_DATE
);








