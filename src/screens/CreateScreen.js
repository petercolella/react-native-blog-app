import React, { useContext, useState } from 'react';
import { Context } from '../context/BlogContext';
import Form from '../components/Form';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    addBlogPost({ title, content }, () => {
      navigation.navigate('Index');
    });
  };

  return (
    <Form
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      buttonTitle="Add Blog Post"
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateScreen;
