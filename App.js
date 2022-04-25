//import liraries
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Navigator from './src/screens/navigation';
// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
