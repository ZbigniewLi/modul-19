import React, { useState } from 'react';

const PostForm = ({handleSubmit, ...props}) => {


  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const onSubmit =(e) => {
    handleSubmit(e, {title, author, publishedDate , shortDescription, content})
  }



   

    return (
        <form onSubmit={onSubmit}>
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
                    value={publishedDate}
                    onChange={(e) => setPublishedDate(e.target.value)}
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
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button type="submit">Add Post</button>
        </form>
    );

};
export default PostForm;