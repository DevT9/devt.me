import React, { useState, useEffect } from 'react';

const VisitorInfo = () => {
  const [visitorCount, setVisitorCount] = useState(() => {
    const storedCount = localStorage.getItem('visitorCount');
    return storedCount ? parseInt(storedCount, 10) : null;
  });
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const fetchVisitorCount = async (method) => {
      try {
        const response = await fetch('https://n3l3m29y2l.execute-api.us-east-1.amazonaws.com/prod/visitor-count', {
          method: method,
        });
        const data = await response.json();

        if (data && data.count) {
          setVisitorCount(data.count);
          localStorage.setItem('visitorCount', data.count.toString());
        } else {
          console.error('Unexpected response format:', data);
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    const initVisitorCount = async () => {
      const hasVisited = localStorage.getItem('hasVisited');

      if (!hasVisited) {
        await fetchVisitorCount('POST');
        localStorage.setItem('hasVisited', 'true');
        setShowWelcome(true);
        setTimeout(() => setShowWelcome(false), 5000);
      } else {
        await fetchVisitorCount('GET');
      }
    };

    initVisitorCount();

    // Set up periodic GET requests
    const intervalId = setInterval(() => fetchVisitorCount('GET'), 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="visitor-info">
      {showWelcome && (
        <div className="welcome-message">
          Welcome, new visitor!
        </div>
      )}
      <div>Visitor Count: {visitorCount !== null ? visitorCount : 'Loading...'}</div>
    </div>
  );
};

export default VisitorInfo;