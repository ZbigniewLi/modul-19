import React, { useState } from 'react';
import { useDispatch, } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addPost } from '../../Redux/postsRedux';
import PostForm from './PostForm';

const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  
    /*const AddPostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');*/



  const handleSubmit = (e, postData )=> {
    //e.preventDefault();
    const {title, shortDescription, author , publishedDate, content } = postData
        // Tutaj można wykorzystać dispatch, aby dodać post do magazynu za pomocą akcji Redux
        dispatch(addPost({ title, shortDescription, author, publishedDate, content }));
        // Przekierowanie po dodaniu postu
        navigate('/');
    };


    return (
        <PostForm handleSubmit={handleSubmit}/>
    );
};

export default AddPostForm;