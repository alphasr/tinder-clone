import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
          }}
          style={styles.image}>
          <View style={styles.cardInner}>
            <Text style={styles.name}>Wario</Text>
            <Text style={styles.bio}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempor arcu quam, eget maximus quam tempus ac. Donec ac nunc eget
              massa volutpat elementum eu eget quam. Nam sit amet ante est. Sed
              non laoreet massa. Duis vel elit ac ipsum dapibus maximus.
              Phasellus eget augue risus.
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  card: {
    width: '95%',
    height: '70%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  name: {
    fontsize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {fontsize: 18, color: 'white', lineHeight: 26},
});
export default App;
