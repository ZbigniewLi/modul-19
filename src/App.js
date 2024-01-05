import Home from './Components/Pages/Home'
import AddPost from './Components/Pages/AddPost'
import EditPost from './Components/Pages/EditPost'
import NotFound from './Components/Pages/NotFound'
import SinglePost from './Components/Pages/SinglePost'
import { Container } from 'react-bootstrap'
import Footer from './Components/Vievs/Footer'
import Header from './Components/Vievs/Header'
import About from './Components/Pages/About'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
