import React, {useCallback, useRef} from 'react';
import {Platform, Alert} from 'react-native'
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
    const [types, setTypes] = React.useState<any>(null)
    
    let {
        flashModel = 'off',
        onDismiss,
        onCaptureDone,
        onInfo
    } = props;
  
    // useCallback(async()=>{
    //     const types = await ExpoCamera.getAvailableCameraTypesAsync();
    //     alert(JSON.stringify(types));
    //     setTypes(types);
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
        type={ExpoCamera.Constants.Type.front}
        flashMode={flashModel}
        ref={webCamRef}
        style={{width: '100%', height: '100%', flex:1,}}
    />
    );
  
}

export default Camera;