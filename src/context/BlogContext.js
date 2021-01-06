import createDataContext from './createDataContext';
import { nanoid } from 'nanoid/async/index.native';
import jsonServer from '../api/jsonServer';

const blogReducer = async (state, action) => {
  switch (action.type) {
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
    await jsonServer.post('/blogposts', post);

    if (cb) cb();
  };
};

const deleteBlogPost = dispatch => {
  return async id => {
    await jsonServer.delete(`/blogposts/${id}`);
    const response = await jsonServer.get('/blogposts');

    dispatch({ type: 'get_blogposts', payload: response.data });
  };
};

const editBlogPost = dispatch => {
  return async (post, cb) => {
    await jsonServer.put(`/blogposts/${post.id}`, post);

    if (cb) cb();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
