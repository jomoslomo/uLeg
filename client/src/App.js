import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Draft from './Draft';
import Navbar from './Navbar';
import DraftList from './DraftList';
import ReviewDraft from './ReviewDraft';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/draft" element={<Draft />} />
          <Route path="/draftlist" element={<DraftList />} />
          <Route path="/reviewdraft/:draftId" element={<ReviewDraft />} /> {/* Check this line */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
