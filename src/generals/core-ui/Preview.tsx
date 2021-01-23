import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from './Icon';
import Text from './Text';

type PreviewProps = {
  uri: any;
  onUndo: () => void;
  onSave: () => void;
};

export default function Preview(props: PreviewProps) {
  let {uri, onUndo, onSave} = props;

  return (
    <View style={styles.flex}>
      {uri ? (
        <Image
          source={{uri: uri && uri.uri}}
          resizeMode="cover"
          style={[styles.flex, styles.fullWidth]}
        />
      ) : (
        <View style={[styles.flex, styles.fullWidth, styles.emptyBackground]} />
      )}
      <View style={styles.previewActionContainer}>
        <View style={styles.previewActionWrapper}>
          <TouchableOpacity
            onPress={onUndo}
            style={[styles.flex, styles.center]}
          >
            {/* <Icon name="reload" color="secondary" size="large" /> */}
            <Text typeColor="secondary" style={styles.marginTop5}>
              Foto Ulang
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onSave}
            style={[styles.flex, styles.center]}
          >
            {/* <Icon name="check_circle" color="secondary" size="large" /> */}
            <Text typeColor="secondary" style={styles.marginTop5}>
              Simpan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  fullWidth: {
    width: '100%',
  },
  center: {
    alignItems: 'center',
  },
  marginTop5: {
    marginTop: 5,
  },
  modal: {
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  containerInfo: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 54,
    paddingHorizontal: 31,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 279,
    marginBottom: 10,
  },
  ruleItem: {
    flexDirection: 'row',
    marginVertical: 3,
  },
  ruleText: {
    flex: 1,
    marginLeft: 5,
  },
  previewActionContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  previewActionWrapper: {
    padding: 25,
    flexDirection: 'row',
  },
  emptyBackground: {
    backgroundColor: 'black',
  },
});
