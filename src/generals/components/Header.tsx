import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {Text} from '../core-ui';

import {HEADER} from '../constants/colors';

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        {/* <Text size="xlarge" typeColor="secondary" style={styles.text}>
            Absensi APP
        </Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    padding: 15,
    backgroundColor: HEADER.background,
    shadowColor: HEADER.shadow,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 5,
    width: '100%',
  },
  text: {
    bottom: 16,
    fontWeight: '400'
  },
});
