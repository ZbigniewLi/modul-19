import { useSelector } from 'react-redux/es/hooks/useSelector';
import Posts from '../../Components/Features/Posts'
import { useParams } from 'react-router-dom';


const SingleCategory = () => {

    const {id} = useParams()
    //const { posts } = initialState;
    const posts = useSelector((state) => state.posts.filter(post => post.category === id)); 

    return (
        <div>
            <h1>{id}</h1>
            <Posts posts={posts} />
        </div>

    )

}

export default SingleCategory;