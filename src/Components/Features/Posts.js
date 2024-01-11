import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../Redux/postsRedux';

const Posts = () => {

  const posts = useSelector(getAllPosts);
  console.log(posts);

  if (!Array.isArray(posts)) {
    return <div>No posts available</div>; // Obsługa sytuacji, gdy posts nie jest tablicą
  }

  

  return (

    <div>
      <h2>All posts</h2>
      <Link to="/post/add">
        <Button variant="success">Add post</Button>
      </Link>
      <Row xs={1} md={2} lg={3} className="g-6">
        {posts.map(post => (
          <Card key={post.id} className="my-2">
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.shortDescription}</Card.Text>
              <Link to={`/post/${post.id}`}>
                <Button variant="primary">Read more</Button>
              </Link>
            </Card.Body>
          </Card>

        ))}
      </Row >

    </div>
  );
};

export default Posts;