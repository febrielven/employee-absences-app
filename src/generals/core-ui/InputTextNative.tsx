import React, {forwardRef, ReactNode, Ref} from 'react';

import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  TextInput,
  TextInputProps,
} from 'react-native';
import Text from './Text';
import {TEXT_INPUT} from '../constants/colors';

export type TextInputNativeProps = TextInputProps & {
  onChangeText?: (input: string) => void;
  label?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  readOnly?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  error?:boolean,
  helperText?:any,
};

function TextInputNative(props: TextInputNativeProps, ref: Ref<HTMLDivElement>) {
  let {
    label,
    onChangeText,
    leftElement,
    rightElement,
    readOnly,
    containerStyle,
    error,
    helperText,
    ...otherProps
  } = props;


  let styleBorder = error ? {borderColor: 'red'} : {};  
  return (
    <View style={[styles.container]}>
      <TextInput
        placeholder={label}
        onChange={(event) => {
          onChangeText && onChangeText(event.target.value);
        }}
   
        {...otherProps}
        style={[styles.input, containerStyle, styleBorder]}
      />
      <Text typeColor='error' size='default'>{helperText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  input: {
    height: 50, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius:5,
    paddingLeft:10,
    paddingRight:10
  },
});

export default TextInputNative;
