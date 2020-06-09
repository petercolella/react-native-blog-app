import createDataContext from './createDataContext';
import { nanoid } from 'nanoid/async/index.native';

const blogReducer = async (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      const blog = { title: `Blog Post #${state.length + 1}` };
      blog.id = await nanoid();
      return [...state, blog];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
