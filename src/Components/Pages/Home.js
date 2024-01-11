import { useSelector } from 'react-redux/es/hooks/useSelector';
import Posts from '../../Components/Features/Posts'


const Home = () => {

    //const { posts } = initialState;
    const posts = useSelector((state) => state.posts); 

    return (
        <div>
            <h1>Home</h1>
            <Posts posts={posts} />
        </div>

    )

}

export default Home;