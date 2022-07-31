/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import users from '../../assets/data/users';
const MatchScreen = () => {
  return (
    <SafeAreaView styles={styles.root}>
      <View styles={styles.container}>
        <Text style={styles.matches}>New Matches</Text>
        <View style={styles.users}>
          {users.map(user => (
            <View style={styles.user} key={user.id}>
              <Image source={{ uri: user.image }} style={styles.image} />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 10,
  },
  user: {
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 50,
    borderWidth: 2,
    padding: 3,
    borderColor: '#F63A6E',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  users: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  matches: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#F63A6E',
  },
});

export default MatchScreen;
