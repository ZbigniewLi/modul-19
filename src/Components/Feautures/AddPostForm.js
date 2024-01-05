import React, { useState } from 'react';
import { useDispatch, } from 'react-redux';
import { useNavigate } from "react-router-dom"

import { addPost } from '../../Redux/postsRedux';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [published, setPublished] = useState('');
  const [mainContent, setMainContent] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj można wykorzystać dispatch, aby dodać post do magazynu za pomocą akcji Redux
    dispatch(addPost({ title, shortDescription, author, published ,mainContent }));
    // Przekierowanie po dodaniu postu
    navigate('/');
  };
 

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="published">Published:</label>
        <input
          type="text"
          id="publishedDate"
          value={published}
          onChange={(e) => setPublished(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ShortDescription">ShortDescription:</label>
        <textarea
          id="ShortDescription"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="MainContent">Main Content:</label>
        <input
          type="text"
          id="category"
          value={mainContent}
          onChange={(e) => setMainContent(e.target.value)}
        />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPostForm;