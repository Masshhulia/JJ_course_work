const fs = require('fs');
const path = require('path');

const loadRoadmapData = () => {
  const raw = fs.readFileSync(path.join(__dirname, 'roadmap_data.json'), 'utf-8');
  return JSON.parse(raw);
};

const buildRoadmap = (preferences) => {
  const { goal, level, hoursPerWeek, durationWeeks } = preferences;
  const roadmapData = loadRoadmapData();

  if (!roadmapData[goal] || !roadmapData[goal][level]) {
    throw new Error('Нет данных для выбранной цели или уровня.');
  }

  const availableModules = roadmapData[goal][level];
  const totalHours = hoursPerWeek * durationWeeks;

  let accumulatedHours = 0;
  const selectedModules = [];

  for (const module of availableModules) {
    if (accumulatedHours + module.hours <= totalHours) {
      selectedModules.push(module);
      accumulatedHours += module.hours;
    }
  }

  return {
    totalHours,
    modules: selectedModules
  };
};

module.exports = { buildRoadmap };
