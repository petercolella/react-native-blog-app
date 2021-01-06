import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import Form from '../components/Form';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  const handleSubmit = (title, content) => {
    addBlogPost({ title, content }, () => {
      navigation.navigate('Index');
    });
  };

  return <Form buttonTitle="Add Blog Post" handleSubmit={handleSubmit} />;
};

export default CreateScreen;
