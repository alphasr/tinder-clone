import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './src/components/TinderCard';
import users from './assets/data/users';
import AnimatedStack from './src/components/AnimatedStack';

const App = () => {
  return (
    <View style={styles.pageContainer}>
      <AnimatedStack
        data={users}
        renderItem={({item}) => <Card user={item} />}></AnimatedStack>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
export default App;
