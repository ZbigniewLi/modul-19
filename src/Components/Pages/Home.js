import initialState from "../../Redux/initialState";
import Posts from '../../Components/Feautures/Posts'


const Home = () => {

    const { posts } = initialState;

    return (
        <div>
            <h1>Home</h1>
            <Posts posts={posts} />
        </div>

    )

}

export default Home;