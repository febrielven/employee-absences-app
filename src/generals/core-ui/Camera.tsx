import React, {useCallback, useRef, useEffect} from 'react';
import {View, Text, Platform, Alert} from 'react-native'
import {Camera as ExpoCamera} from 'expo-camera';

type flashModel = 'off' | 'on';
type Props ={
    cameraType?:string;
    flashModel?:flashModel;
    onDismiss?:() => void;
    onCaptureDone?:()=>void;
    onInfo?: () => void;
}

function Camera(props: Props) {
    const [startCamera, setStartCamera] = React.useState(true)
    const [hasPermission, setHasPermission] = React.useState(null);
    
    const [type, setType] = React.useState(ExpoCamera.Constants.Type.back);
    
    let {
        flashModel = 'off',
        onDismiss,
        onCaptureDone,
        onInfo
    } = props;

    useEffect(() => {
        (async () => {
          const { status } = await ExpoCamera.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
  
    // useCallback(async()=>{
    //     const types = await ExpoCamera.getAvailableCameraTypesAsync();
    //     alert(JSON.stringify(types));
    //     if (Platform.OS === 'web') {
    //       setStartCamera(true)
    //     } else {
    //       const {status} = await ExpoCamera.requestPermissionsAsync()
    //       console.log(status)
    //       if (status === 'granted') {
    //         setStartCamera(true)
    //       } else {
    //         Alert.alert('Access denied')
    //       }
    //     }
    // },[startCamera]);

    let webCamRef = useRef<ExpoCamera>(null);
    return(
        <ExpoCamera
        type={type}
        flashMode={flashModel}
        ref={webCamRef}
        style={{width: '100%', height: '100%', flex:1,}}
    />
    );
  
}

export default Camera;