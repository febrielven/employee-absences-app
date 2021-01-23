import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  Alert,
  Image,
} from 'react-native';
import {Camera as ExpoCamera} from 'expo-camera';
import {Text, Icon} from './';
import frameSelfie from '../../../assets/images/frames/frameSelfie.png';

export type MaskType = 'selfie';

type Props = {
  cameraType?: string;
  onDismiss?: () => void;
  onCaptureDone?: () => void;
  onInfo?: () => void;
  mask?: MaskType;
};
export default function Camera(props: Props) {
  let {mask = 'selfie' as MaskType, onDismiss, onInfo, onCaptureDone} = props;
  const [type, setType] = useState(ExpoCamera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      if (Platform.OS != 'web') {
        const {status} = await ExpoCamera.requestPermissionsAsync();
        if (status != 'granted') {
          Alert.alert('No access to camera');
        }
      }
    })();
  }, []);

  return (
    <>
      <ExpoCamera style={{flex: 1}} type={type} />
      <Mask mask={mask} onDismiss={onDismiss} onInfo={onInfo} />
    </>
  );
}

type MaskProps = Pick<Props, 'onDismiss' | 'onInfo' | 'mask'> & {
  onAction?: () => void;
};

function Mask(props: MaskProps) {
  let {mask, onDismiss, onInfo, onAction} = props;
  let imageSource = mask === 'selfie' ? frameSelfie : frameSelfie;

  return (
    <>
      <View style={styles.mask}>
        <Image source={imageSource} style={styles.maskImage} />
      </View>
      <View style={styles.mask}>
        <View style={styles.maskContent}>
          <TouchableOpacity onPress={onDismiss} style={styles.backWrapper}>
            {/* <Icon name="arrow_back" color="secondary" /> */}
          </TouchableOpacity>
          {mask === 'selfie' ? (
            <View style={styles.descriptionSelfie}>
              <Text typeColor="secondary">
                Pastikan Wajah Anda berada di dalam area lingkaran
              </Text>
            </View>
          ) : (
            <View />
          )}
          <View style={styles.footer}>
            <View style={styles.cameraButtonWrapper}>
              <TouchableOpacity onPress={onAction}>
                <Icon name="camera" size="large" />
              </TouchableOpacity>
            </View>
            {/* <View style={styles.infoButtonWrapper}>
              <TouchableOpacity onPress={onInfo}>
                INFO
                <Icon name="info_circle" color="secondary" size="large" />
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    position: 'relative',
    flex: 1,
  },
  mask: {
    ...StyleSheet.absoluteFillObject,
  },
  maskImage: {
    flex: 1,
    width:'100%',
    height:'100%'
  },
  maskContent: {
    padding: 10,
    flex: 1,
  },
  backWrapper: {
    padding: 10,
    width: 44,
  },
  description: {
    flex: 1,
    alignItems: 'center',
  },
  descriptionSelfie: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 30,
  },
  cameraButtonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoButtonWrapper: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
