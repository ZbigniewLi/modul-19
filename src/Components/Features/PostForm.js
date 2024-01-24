import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getAllCategories } from "../../Redux/categoriesRedux";


const PostForm = ({ handleSubmit: action, ...props }) => {

    const categories = useSelector(getAllCategories);

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [category, setCategory] = useState(props.category || '');
    const [content, setContent] = useState(props.content || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [categoryError, setCategoryError] = useState(false);
    

    

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    /*const onSubmit = (e) => {
        handleSubmit(e, { title, author, publishedDate, shortDescription, content })
    } */

    const handleSubmit = (e) => {
        const contentPlane = content.replace(/(<([^>]+)>)/ig, '')
        setContentError(!contentPlane)
        setDateError(!publishedDate)
        setCategoryError(!category || !categories.includes(category));

        if (contentPlane && publishedDate && category && categories.includes(category)) {
            action(e, { title, author, publishedDate, category, shortDescription, content });
        };
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

            <Form.Group className="mb-3 px-1">
                <Form.Label className="px-0">Categories</Form.Label>
                <Form.Select
                    value={category} onChange={e => setCategory(e.target.value)}>
                    <option>Select Category</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}

                </Form.Select>
                {categoryError && (<small className="d-block form-text text-danger mt-2 px-0">This field is required.</small>)}
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
                {contentError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>
            <button type="submit">Add Post</button>

        </form>


    );

};
export default PostForm;