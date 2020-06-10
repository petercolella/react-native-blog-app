import React, { useContext } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Blog List</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather style={styles.icon} name="plus" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text numberOfLines={1} style={styles.title}>
                  {item.title}/{item.content} - ID: {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  row: {
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    padding: 15
  },
  title: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
