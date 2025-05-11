import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Blog from './components/Blog';
import VisitorInfo from './components/VisitorInfo';
import GridAnimation from './components/GridAnimation';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <GridAnimation />
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/blog" element={<Blog />} /> */}
          </Routes>
        </main>
        <VisitorInfo />
      </div>
    </Router>
  );
}

export default App;
