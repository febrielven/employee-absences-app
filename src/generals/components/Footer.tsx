import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Text} from '../core-ui';

import {FOOTER} from '../constants/colors';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text size="small" typeColor="secondary">
        Copyright &#9400;{new Date().getFullYear()} Absensi Karyawan
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    padding: 10,
    backgroundColor: FOOTER.background,
  },
});
