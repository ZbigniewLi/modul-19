import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const PostForm = ({ handleSubmit: action, ...props }) => {


    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);


    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    /*const onSubmit = (e) => {
        handleSubmit(e, { title, author, publishedDate, shortDescription, content })
    } */

    const handleSubmit = (e) => {
            const contentPlane = content.replace(/(<([^>]+)>)/ig, '')
        setContentError(!contentPlane)
        setDateError(!publishedDate)
        if (contentPlane && publishedDate) {
            action(e,{ title, author, publishedDate, shortDescription, content });
        }
    };


    return (

        <form //onSubmit={onSubmit}>
            onSubmit={validate(handleSubmit)}>



            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    {...register("title", { required: true })}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text" placeholder="Enter title"
                />
                {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author</Form.Label>
                <Form.Control
                    {...register("author", { required: true, minLength: 3 })}
                    type="text"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {errors.author && (
                    <small className="d-block form-text text-danger">Author must be at least 3 characters long</small>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>publishedDate</Form.Label>
                
                <DatePicker
  selected={publishedDate}
  
  onChange={setPublishedDate} //only when value has changed
/>
                {dateError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>



            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>ShortDescription</Form.Label>
                <Form.Control
                    as="textarea"
                    {...register("shortDescription", { required: true, minLength: 20 })}
                    id="ShortDescription"
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                />

                {errors.shortDescription && (
                    <small className="d-block form-text text-danger">Short description must be at least 20 characters long</small>
                )}
            </Form.Group>




            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>MainContent</Form.Label>
                <ReactQuill theme="snow" value={content} onChange={setContent} />;
                { contentError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>
            <button type="submit">Add Post</button>

        </form>


    );

};
export default PostForm;