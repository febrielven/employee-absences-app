import React, {useState, useEffect, useRef, useCallback} from 'react';
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

type CameraType = 'front' | 'back';
type Props = {
  onDismiss?: () => void;
  onCaptureDone: (source: any) => void;
  onInfo?: () => void;
  mask?: MaskType;
  cameraType?: CameraType;
};

export default function Camera(props: Props) {
  let {
    mask = 'selfie' as MaskType,
    cameraType = 'front',
    onDismiss,
    onInfo,
    onCaptureDone,
  } = props;
  let webCamRef = useRef<ExpoCamera>(null);
  let capture = useCallback(async () => {
    let source: any = await webCamRef.current?.takePictureAsync();
    // let imgBase64: string = JSON.stringify(source.uri);
    !!source && onCaptureDone(source);
  }, [webCamRef, onCaptureDone]);

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
      <ExpoCamera type={cameraType} ref={webCamRef} style={{flex: 1}} />
      <Mask
        mask={mask}
        onDismiss={onDismiss}
        onInfo={onInfo}
        onAction={capture}
      />
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
    width: '100%',
    height: '100%',
  },
  maskContent: {
    padding: 10,
    flex: 1,
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
});
