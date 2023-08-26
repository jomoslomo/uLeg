import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Draft from './pages/Draft';
import DraftList from './pages/DraftList';
import Home from './pages/Home';
import Bootbar from './components/Bootbar';
import ReviewDraft from './pages/ReviewDraft';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <Bootbar />
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
