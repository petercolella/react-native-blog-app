import createDataContext from './createDataContext';
import { nanoid } from 'nanoid/async/index.native';

const blogReducer = async (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      const blog = { title: `Blog Post #${state.length + 1}` };
      blog.id = await nanoid();
      return [...state, blog];
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
