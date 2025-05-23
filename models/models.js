const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50)
    },
    last_name: {
      type: DataTypes.STRING(255)
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      unique:true
    },
    job: {
      type: DataTypes.STRING(255)
    },
    linked_in: {
      type: DataTypes.STRING(255),
      unique:true
    },
    RegistrationDate: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    documents: {
      type: DataTypes.TEXT
    },
  });

  const UsageDays = sequelize.define('UsageDays', {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    usage_date: {
      type: DataTypes.DATE
    }
  });

  const RoadmapsNames = sequelize.define('RoadmapsNames', {
    RoadmapName_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    RoadmapName_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    RoadmapName_description: {
      type: DataTypes.STRING(255),
      allowNull: false
    }},
   {timestamps: false
  });

  const Roadmaps = sequelize.define('Roadmaps', {
    roadmap_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    RmName_id: {
      type: DataTypes.INTEGER,
      references: {
        model: RoadmapsNames,
        key: 'RoadmapName_id'
      }
    }
  });

  

  const CompletedRoadmaps = sequelize.define('CompletedRoadmaps', {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    roadmap_ID: {
      type: DataTypes.INTEGER,
      references: {
        model: Roadmaps,
        key: 'roadmap_ID'
      }
    },
    completion_date: {
      type: DataTypes.DATE
    }
  });
  
  const Achievements = sequelize.define('Achievements', {
    achievement_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    achievement_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  });
  
  const UserAchievements = sequelize.define('UserAchievements', {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    achievements_ID: {
      type: DataTypes.INTEGER,
      references: {
        model: Achievements,
        key: 'achievement_ID'
      }
    },
    achievement_date: {
      type: DataTypes.DATE
    }
  });
  
  const RoadmapsPages = sequelize.define('RoadmapsPages', {
    page_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    creation_date: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    RmName_id: {
      type: DataTypes.INTEGER,
      references: {
        model: RoadmapsNames,
        key: 'RoadmapName_id'
      }
    }
  });
  
  const RoadmapsLinks = sequelize.define('RoadmapsLinks', {
    link_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    pages_ID: {
      type: DataTypes.INTEGER,
      references: {
        model: RoadmapsPages,
        key: 'page_ID'
      }
    },
    link_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  });

  const Tests = sequelize.define('Tests', {
    test_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    Description: {
      type: DataTypes.TEXT
    }
  });
  
  const Questions = sequelize.define('Questions', {
    question_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    test_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Tests, // Указываем на Tests
        key: 'test_ID' // Ссылаемся на test_ID
    }
    }
  });
  
  const Options = sequelize.define('Options', {
    option_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    questions_ID: {
      type: DataTypes.INTEGER,
      references: {
        model: Questions,
        key: 'question_ID'
      }
    },
    option_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isCorrect: {
      type: DataTypes.BOOLEAN
    }
  });
  
 
  
  const TestResults = sequelize.define('TestResults', {
    result_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    tests_ID: {
      type: DataTypes.INTEGER,
      references: {
        model: Tests,
        key: 'test_ID'
      }
    },
    score: {
      type: DataTypes.INTEGER
    },
    test_date: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_DATE')
    }
  });
  
  UsageDays.belongsTo(User, { foreignKey: 'user_id' });
  User.hasMany(UsageDays, { foreignKey: 'user_id' });

  CompletedRoadmaps.belongsTo(User, { foreignKey: 'user_id' });
  CompletedRoadmaps.belongsTo(Roadmaps, { foreignKey: 'roadmap_ID' });
  User.belongsToMany(Roadmaps, { through: CompletedRoadmaps, foreignKey: 'user_id' });
  Roadmaps.belongsToMany(User, { through: CompletedRoadmaps, foreignKey: 'roadmap_ID' });

UserAchievements.belongsTo(User, { foreignKey: 'user_id' });
UserAchievements.belongsTo(Achievements, { foreignKey: 'achievements_ID' });
User.belongsToMany(Achievements, { through: UserAchievements, foreignKey: 'user_id' });
Achievements.belongsToMany(User, { through: UserAchievements, foreignKey: 'achievements_ID' });

RoadmapsPages.belongsTo(Roadmaps, { foreignKey: 'roadmap_ID' });
Roadmaps.hasMany(RoadmapsPages, { foreignKey: 'roadmap_ID' });

Roadmaps.belongsTo(RoadmapsNames, {foreignKey: 'RmName_id'});
RoadmapsNames.hasMany(Roadmaps,{foreignKey:  'RmName_id'});

RoadmapsPages.belongsTo(RoadmapsNames, {foreignKey: 'RmName_id'});
RoadmapsNames.hasMany(RoadmapsPages,{foreignKey:  'RmName_id'});

RoadmapsLinks.belongsTo(RoadmapsPages, { foreignKey: 'pages_ID' });
RoadmapsPages.hasMany(RoadmapsLinks, { foreignKey: 'pages_ID' });

Tests.hasMany(Questions, { foreignKey: 'test_id' });
Options.belongsTo(Questions, { foreignKey: 'questions_ID' });
Questions.hasMany(Options, { foreignKey: 'questions_ID' });

Questions.belongsTo(Tests, { foreignKey: 'test_id' });

TestResults.belongsTo(User, { foreignKey: 'user_id' });
TestResults.belongsTo(Tests, { foreignKey: 'tests_ID' });
User.hasMany(TestResults, { foreignKey: 'user_id' });
Tests.hasMany(TestResults, { foreignKey: 'tests_ID' });

module.exports = {
    User,
    UsageDays,
    Roadmaps,
    CompletedRoadmaps,
    Achievements,
    UserAchievements,
    RoadmapsNames,
    RoadmapsPages,
    RoadmapsLinks,
    Questions,
    Options,
    Tests,
    TestResults
  };