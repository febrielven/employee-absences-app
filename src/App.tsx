import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Absences} from './scenes/absences';
import {Camera} from './generals/core-ui';
import {Header, Footer} from './generals/components';

export default function App() {
  return (
    <>
    <Camera />
      {/* <Header/>
      <View style={styles.container}>
        <View style={styles.mobileView}>
          <Absences />
        </View>
      </View>
      <Footer /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex'
  },
  mobileView: {
    flex: 1,
    alignSelf: 'center',
    maxWidth: 414,
    width: '100%',  
  },
});
