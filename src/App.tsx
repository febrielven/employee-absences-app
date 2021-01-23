import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Absences} from './scenes/absences';
import {Header, Footer} from './generals/components';

export default function App() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.mobileView}>
          <Absences />
        </View>
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flex:1,
   
  },
  mobileView: {
    flex: 1,
    alignSelf: 'center',
    maxWidth: 414,
    width: '100%',  
  },
});
