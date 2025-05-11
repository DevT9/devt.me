import React, { useState, useEffect, useCallback } from 'react';

const VisitorInfo = () => {
  const [visitorCount, setVisitorCount] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);
  const [lastUpdateTime, setLastUpdateTime] = useState(null);

  const fetchVisitorCount = useCallback(async (method) => {
    try {
      console.log(`Fetching visitor count with method: ${method}`);
      const response = await fetch('https://n3l3m29y2l.execute-api.us-east-1.amazonaws.com/prod/visitor-count', {
        method: method,
      });
      const data = await response.json();
      console.log('Received data:', data);

      if (data && data.count !== undefined) {
        console.log(`Updating visitor count to: ${data.count}`);
        setVisitorCount(prevCount => {
          if (prevCount !== data.count) {
            console.log(`Count changed from ${prevCount} to ${data.count}`);
            return data.count;
          }
          return prevCount;
        });
        setLastUpdateTime(new Date().toLocaleTimeString());
      } else {
        console.error('Unexpected response format:', data);
      }
    } catch (error) {
      console.error('Error fetching visitor count:', error);
    }
  }, []);

  useEffect(() => {
    const initVisitorCount = async () => {
      const hasVisited = localStorage.getItem('hasVisited');

      if (!hasVisited) {
        console.log('New visitor detected');
        await fetchVisitorCount('POST');
        localStorage.setItem('hasVisited', 'true');
        setShowWelcome(true);
        setTimeout(() => setShowWelcome(false), 5000);
      } else {
        console.log('Returning visitor detected');
        await fetchVisitorCount('POST');
      }

      // Set up periodic GET requests
      const intervalId = setInterval(() => fetchVisitorCount('POST'), 10000);
      return () => clearInterval(intervalId);
    };

    initVisitorCount();
  }, [fetchVisitorCount]);

  return (
    <div className="visitor-info">
      {showWelcome && (
        <div className="welcome-message">
          Welcome, new visitor!
        </div>
      )}
      <div>Visitor Count: {visitorCount !== null ? visitorCount : 'Loading...'}</div>
      {lastUpdateTime && <div>Last updated: {lastUpdateTime}</div>}
    </div>
  );
};

export default VisitorInfo;