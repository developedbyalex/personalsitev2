import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import * as Swetrix from 'swetrix';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Store from './pages/Store';
import './App.css';

// Analytics wrapper component
function AnalyticsWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    Swetrix.trackViews();
  }, [location]);

  return <>{children}</>;
}

function App() {
  useEffect(() => {
    // Initialize Swetrix
    Swetrix.init('S4A5tyYNbCb8');
  }, []);

  return (
    <Router>
      <AnalyticsWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </AnalyticsWrapper>
    </Router>
  );
}

export default App; 