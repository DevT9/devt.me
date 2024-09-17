import React, { useState, useEffect } from 'react';

const VisitorInfo = () => {
  const [visitorCount, setVisitorCount] = useState(null);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // Check if this is the first visit
        const firstVisit = !localStorage.getItem('hasVisited');
        setIsFirstVisit(firstVisit);
        
        // Check if we have a stored count
        const storedCount = localStorage.getItem('visitorCount');

        if (!firstVisit && storedCount) {
          // If it's not the first visit and we have a stored count, use that
          setVisitorCount(parseInt(storedCount, 10));
        } else {
          // Otherwise, fetch from the API
          const response = await fetch('https://n3l3m29y2l.execute-api.us-east-1.amazonaws.com/prod/visitor-count', {
            method: 'GET',
          });
          const data = await response.json();

          if (data && data.count) {
            setVisitorCount(data.count);
            
            // Store the count and set the visited flag
            localStorage.setItem('visitorCount', data.count.toString());
            localStorage.setItem('hasVisited', 'true');

            if (firstVisit) {
              setShowWelcome(true);
              setTimeout(() => setShowWelcome(false), 5000); // Hide welcome message after 5 seconds
            }
          } else {
            console.error('Unexpected response format:', data);
          }
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchVisitorCount();
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