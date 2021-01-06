import React, { useContext, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state, getBlogPosts } = useContext(Context);

  useEffect(() => {
    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title: {blogPost.title}</Text>
      <Text style={styles.text}>Content: {blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <Feather style={styles.icon} name="edit" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    margin: 5
  },
  icon: {
    marginRight: 15
  },
  text: {
    fontSize: 20,
    marginBottom: 5
  }
});

export default ShowScreen;
