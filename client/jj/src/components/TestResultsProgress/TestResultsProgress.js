import React from 'react';

const TestResults = ({ testResults }) => {
    return (
        <div>
            {Array.isArray(testResults) && testResults.length > 0 ? (
                testResults.map((result) => (
                    <div key={result.testId} className="test-result">
                        <h2 style={{ color: '#1DC9A0' }}>{result.title}</h2>
                        <div className="w3-light-grey">
                            <div
                                className="w3-container w3-green"
                                style={{ height: '10px', width: `${result.score}%` }}
                            ></div>
                        </div>
                        <div style={{ fontSize: '20px' }}>{result.score} из 100%</div>
                    </div>
                ))
            ) : (
                <div>No test results available.</div>
            )}
        </div>
    );
};

export default TestResults;