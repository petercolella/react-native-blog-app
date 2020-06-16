import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import Form from '../components/Form';

const EditScreen = ({ navigation }) => {
  const { editBlogPost, state } = useContext(Context);
  const id = navigation.getParam('id');

  const blogPost = state.find(blogPost => blogPost.id === id);

  const handleSubmit = (title, content) => {
    editBlogPost({ title, content, id }, () => {
      navigation.navigate('Index');
    });
  };

  return (
    <Form
      initialValue={blogPost}
      buttonTitle="Update Blog Post"
      handleSubmit={handleSubmit}
    />
  );
};

export default EditScreen;
