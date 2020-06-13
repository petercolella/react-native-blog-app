import createDataContext from './createDataContext';
import { nanoid } from 'nanoid/async/index.native';

const blogReducer = async (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      const blog = action.payload;
      blog.id = await nanoid();
      return [...state, blog];
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'edit_blogpost':
      const post = action.payload;
      return state.map(blogPost => {
        if (blogPost.id === post.id) {
          return post;
        }
        return blogPost;
      });
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (post, cb) => {
    dispatch({ type: 'add_blogpost', payload: post });
    cb();
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
    cb();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: 'Test Post', content: 'Test Content', id: 'test123' }]
);
