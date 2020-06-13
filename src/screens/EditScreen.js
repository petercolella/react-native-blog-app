import React, { useContext, useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const { editBlogPost } = useContext(Context);

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
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <Text style={styles.label}>Content:</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="Content"
          value={content}
          onChangeText={setContent}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Update Blog Post" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center'
  },
  container: {
    flex: 1,
    margin: 5
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 18,
    padding: 10
  },
  inputWrapper: {
    height: 75
  },
  label: {
    fontSize: 20,
    marginBottom: 5
  }
});

export default EditScreen;
