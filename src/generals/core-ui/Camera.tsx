import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Platform, Alert} from 'react-native';
import {Camera as ExpoCamera} from 'expo-camera';

type Props = {
  cameraType?: string;
  onDismiss?: () => void;
  onCaptureDone?: () => void;
  onInfo?: () => void;
};
export default function Camera(props: Props) {
  const [startCamera, setStartCamera] = useState(false);
  const [type, setType] = useState(ExpoCamera.Constants.Type.front);

  useEffect(() => {
    (async () => {
        if (Platform.OS === 'web') {
            setStartCamera(true)
          } else {
            const {status} = await ExpoCamera.requestPermissionsAsync()
            console.log(status)
            if (status === 'granted') {
              setStartCamera(true)
            } else {
              Alert.alert('No access to camera')
            }
          }
    })();
  }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
  return <ExpoCamera style={styles.camera} type={type} />;
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
});
