import createDataContext from './createDataContext';
import { nanoid } from 'nanoid/async/index.native';
import jsonServer from '../api/jsonServer';

const blogReducer = async (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      // const blog = action.payload;
      // blog.id = await nanoid();
      // return [...state, blog];
      return action.payload;
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'edit_blogpost':
      const post = action.payload;
      return state.map(blogPost => {
        return blogPost.id === post.id ? post : blogPost;
      });
    case 'get_blogposts':
      return action.payload;
    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts');

    dispatch({ type: 'get_blogposts', payload: response.data });
  };
};

const addBlogPost = dispatch => {
  return async (post, cb) => {
    const response = await jsonServer.post('/blogposts', post);
    const state = await jsonServer.get('/blogposts');

    dispatch({ type: 'add_blogpost', payload: state.data });
    if (cb) cb();
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

const editBlogPost = dispatch => {
  return (post, cb) => {
    dispatch({ type: 'edit_blogpost', payload: post });
    if (cb) cb();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
