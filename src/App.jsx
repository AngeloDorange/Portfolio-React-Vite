// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './scrollToTop'

import Navigation from './pages/navigation/nav';
import Home from '../src/pages/home/home';
import About from '../src/pages/about/about';
import Project from '../src/pages/projects/project'
import Contact from '../src/pages/contact/contact'

import { AnimatePresence } from 'framer-motion';


function App() {

  const [flashing, setFlashing] = useState(false);

  useEffect(() => {
    // Start the flashing title when the component mounts
    const intervalId = setInterval(() => {
      setFlashing((prevState) => !prevState);
    }, 1000); // Change the interval (in milliseconds) to control the flashing speed

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Update the title based on the flashing state
    document.title = flashing ? '👨‍💻 Angelo Dorange' : '💻 Front-end developer';
  }, [flashing]);


  return (
    <>
      <Router>
        <ScrollToTop />
        <Navigation />
        <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
