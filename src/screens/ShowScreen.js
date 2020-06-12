import React, { useContext } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

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
      <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
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