import React, { useContext, useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = () => {
  const { addBlogPost } = useContext(Context);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <Text style={styles.label}>Enter Content:</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="Content"
          value={content}
          onChangeText={setContent}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Add Post"
          onPress={() => addBlogPost({ title, content })}
        />
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
    fontSize: 18
  }
});

export default CreateScreen;
