import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/DraftList.css';

const DraftList = () => {
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    async function fetchDrafts() {
      try {
        const response = await fetch('http://localhost:5001/api/drafts');
        if (response.ok) {
          const data = await response.json();
          setDrafts(data);
        } else {
          console.error('Failed to fetch drafts:', response.status);
        }
      } catch (error) {
        console.error('Error fetching drafts:', error);
      }
    }

    fetchDrafts();
  }, []);

  return (
    <div className="draft-list-container">
      <h2>List of Submitted Drafts</h2>
      <ul className="draft-list">
        {drafts.map((draft) => (
          <li key={draft._id}>
            <Link to={`/reviewdraft/${draft._id}`}> {/* Ensure the correct path */}
              <h3>{draft.title}</h3>
            </Link>
            <p>{draft.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DraftList;
