import React, { useContext, useState } from 'react';
import { Context } from '../context/BlogContext';
import Form from '../components/Form';

const EditScreen = ({ navigation }) => {
  const { editBlogPost, state } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  );

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  const handleSubmit = () => {
    editBlogPost({ title, content, id: blogPost.id }, () => {
      navigation.navigate('Index');
    });
  };

  return (
    <Form
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      buttonTitle="Update Blog Post"
      handleSubmit={handleSubmit}
    />
  );
};

export default EditScreen;
