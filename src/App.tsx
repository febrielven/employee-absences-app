import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Absences} from './scenes/absences';
import {Header, Footer} from './generals/components';

export default function App() {
  return (
    <>
      <Header/>
      <ScrollView style={styles.container}>
        <View style={styles.mobileView}>
          <Absences />
        </View>
      </ScrollView>
      <Footer />
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
