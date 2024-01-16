import React from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom"
import { editPost, getPostbyId } from '../../Redux/postsRedux';
import PostForm from './PostForm';

const EditPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const post = useSelector(state => getPostbyId(state, id));

    

    const handleSubmit = (e, postData )=> {
        //e.preventDefault();
        const {title, shortDescription, author , publishedDate, content } = postData
        // Tutaj można wykorzystać dispatch, aby dodać post do magazynu za pomocą akcji Redux
        dispatch(editPost({ title, shortDescription, author, publishedDate, content, id }));
        // Przekierowanie po dodaniu postu
        navigate('/');
    };


    return (
       <PostForm {...post} handleSubmit={handleSubmit}/>
    );
};

export default EditPostForm;