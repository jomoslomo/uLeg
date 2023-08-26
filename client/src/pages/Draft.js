import React, { useState } from 'react';
import './styles/Draft.css';

const Draft = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the draft data to the backend API
      const response = await fetch('http://localhost:5001/api/drafts', { // <-- Specify the full backend URL with port number
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

      if (response.ok) {
        // Draft submitted successfully
        console.log('Draft Submitted:', { title, content });
        // Clear the form fields after submission
        setTitle('');
        setContent('');
      } else {
        console.error('Failed to submit draft:', response.status);
        // Handle the error and display an error message if needed
      }
    } catch (error) {
      console.error('Error submitting draft:', error);
      // Handle the error and display an error message if needed
    }
  };

  return (
    <div className="draft-container">
      <h2>Draft Legislation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            rows="8"
            required
          />
        </div>
        <button type="submit">Submit Draft</button>
      </form>
    </div>
  );
};

export default Draft;