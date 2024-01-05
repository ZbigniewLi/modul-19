import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import initialState from '../../Redux/initialState';

const SinglePost = () => {
  const { id } = useParams(); // Pobranie id z adresu URL
  const [post, setPost] = useState(null); // Stan przechowujący dane pojedynczego postu

  // Symulacja pobierania danych z bazy (tu używamy initialState)
  useEffect(() => {
    // Tutaj powinieneś pobrać odpowiedni post na podstawie 'id' z Twojej bazy danych lub stanu aplikacji
    // Możesz skorzystać z Redux, Context API lub innych metod pobierania danych

    // Przykład: Pobieranie danych z initialState
    // Załóżmy, że initialState zawiera tablicę posts
    const foundPost = initialState.posts.find(post => post.id === id);

    if (foundPost) {
      setPost(foundPost); // Ustawienie pobranego postu w stanie komponentu
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>; // Komunikat podczas ładowania danych
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.shortDescription}</p>
      <p>{post.publishedDate}</p>
      <p>{post.author}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default SinglePost;