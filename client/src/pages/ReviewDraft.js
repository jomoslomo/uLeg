import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ReviewDraft = () => {
  const { draftId } = useParams();
  const [draft, setDraft] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');

  useEffect(() => {
    async function fetchDraftDetails() {
      try {
        const response = await fetch(`http://localhost:5001/api/drafts/${draftId}`);
        if (response.ok) {
          const data = await response.json();
          setDraft(data);
          setEditedTitle(data.title);
          setEditedContent(data.content);
        } else {
          console.error('Failed to fetch draft details:', response.status);
        }
      } catch (error) {
        console.error('Error fetching draft details:', error);
      }
    }

    fetchDraftDetails();
  }, [draftId]);

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/drafts/${draftId}`, {
        method: 'PUT', // Use the appropriate HTTP method for updating
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: editedTitle, content: editedContent }),
      });

      if (response.ok) {
        // Update the draft state with the edited data
        setDraft({ ...draft, title: editedTitle, content: editedContent });
      } else {
        console.error('Failed to save draft:', response.status);
      }
    } catch (error) {
      console.error('Error saving draft:', error);
    }
  };

  return (
    <div className="review-draft-container">
      <h2>Edit Draft</h2>
      {draft ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <p>Loading draft details...</p>
      )}
    </div>
  );
};

export default ReviewDraft;



