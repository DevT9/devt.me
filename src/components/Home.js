import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My Personal Website</h1>
      <img src="/images/pfp.jpg" alt="Dev Thakkar" className="profile-pic" />
      <h2>About Me</h2>
      <p>Hello, I'm [Your Name]. Welcome to my corner of the World Wide Web!</p>
      <p>I'm a [Your Profession] based in [Your Location].</p>
      <h3>My Interests:</h3>
      <ul>
        <li>Interest 1</li>
        <li>Interest 2</li>
        <li>Interest 3</li>
      </ul>
      <div className="counter">
        Visitors: 1337
      </div>
    </div>
  );
}

export default Home;
