 import initialState from "./initialState";

//selectors
export const getAllPosts =(state) => state.columns;

// actions
const createActionName = actionName => `app/posts/${actionName}`;

const ADD_POST = 'ADD_POST';

// action creators
export const addPost= payload => ({type: ADD_POST, payload });


const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    default:
      return state;
  }; 
};


export default postsReducer;



