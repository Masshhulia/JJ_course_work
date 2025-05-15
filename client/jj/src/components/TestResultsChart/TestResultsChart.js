import { useMemo } from "react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip
} from "recharts";

const TestResultsRadar = ({ testResults }) => {
  const radarData = useMemo(() => {
    if (!Array.isArray(testResults)) return [];

    const latestScores = {};

    testResults.forEach(result => {
      const title = result.testTitle || `Test ${result.tests_ID}`;
      const testDate = new Date(result.test_date || 0);
      
      if (
        !latestScores[title] ||
        new Date(latestScores[title].test_date || 0) < testDate
      ) {
        latestScores[title] = {
          subject: title,
          score: result.score,
          test_date: result.test_date
        };
      }
    });

    return Object.values(latestScores).map(r => ({
      subject: r.subject,
      A: r.score,
      fullMark: 100,
    }));
  }, [testResults]);

  if (radarData.length === 0) return null;

  return (
    <div style={{ paddingLeft: "450px" }}>
  <RadarChart outerRadius={90} width={500} height={400} data={radarData}>
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis angle={30} domain={[0, 100]} />
    <Tooltip />
    <Radar name="Пользователь" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  </RadarChart>
</div>

  );
};

export default TestResultsRadar;
