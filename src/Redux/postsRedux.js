import shortid from 'shortid';
//selectors
export const getAllPosts = (state) => state.posts;
export const getPostbyId = (state, id) => state.posts.find(post => post.id === id);
export const filteredPostsByCategory = ({ posts }, category) => posts.filter(post => post.category === category);

// actions
const createActionName = actionName => `app/posts/${actionName}`;

const REMOVE_POST = createActionName('REMOVE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

// action creators
export const addPost = payload => ({ type: ADD_POST, payload });
export const removePost = payload => ({ type: REMOVE_POST, payload });
export const editPost = payload => ({ type: EDIT_POST, payload });


const postsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:

      return [...state, { ...action.payload, id: shortid() }];

    case REMOVE_POST:
      return state.filter(post => post.id !== action.payload)

    case EDIT_POST:
      return state.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));

    default:
      return state;
  };
};


export default postsReducer;



