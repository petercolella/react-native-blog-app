import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

const Form = ({ initialValue, buttonTitle, handleSubmit }) => {
  const [title, setTitle] = useState(initialValue.title);
  const [content, setContent] = useState(initialValue.content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          autoCorrect={false}
          placeholder="Enter title"
          style={styles.inputStyle}
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <Text style={styles.label}>Content:</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          autoCorrect={false}
          placeholder="Enter content"
          style={styles.inputStyle}
          value={content}
          onChangeText={setContent}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title={buttonTitle}
          onPress={() => handleSubmit(title, content)}
        />
      </View>
    </View>
  );
};

Form.defaultProps = {
  initialValue: {
    title: '',
    content: ''
  }
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

export default Form;
