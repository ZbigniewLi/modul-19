import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostbyId } from '../../Redux/postsRedux';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { removePost } from '../../Redux/postsRedux';
import { Link } from 'react-router-dom';

const SinglePost = () => {
  const { id } = useParams(); // Pobranie id z adresu URL
  const post = useSelector(state => getPostbyId(state, id));
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRemove = () =>  {
    dispatch(removePost(id))
    navigate('/');
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure, you want delete this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleRemove}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.shortDescription}</p>
      <p>{post.publishedDate}</p>
      <p>{post.author}</p>
      <Link to={`/post/edit/${post.id}`}>
                <Button variant="primary">Edit</Button>
              </Link>
      <Button variant="primary" onClick={handleShow}>
        Delete
      </Button>

    </div>
  );
};

export default SinglePost;