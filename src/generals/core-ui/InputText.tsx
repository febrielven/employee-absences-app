import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import TextField, {TextFieldProps} from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import {TEXT_INPUT} from '../constants/colors';

type Props = TextFieldProps & {
  onChangeText?: (input: string) => void;
  label?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  readOnly?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

function TextInput(props: Props) {
  let {
    label,
    placeholder,
    onChangeText,
    leftElement,
    rightElement,
    readOnly,
    disabled,
    containerStyle,
    ...otherProps
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <TextField
        label={label}
        placeholder={placeholder}
        variant="outlined"
        onChange={(event) => {
          onChangeText && onChangeText(event.target.value);
        }}
        style={disabled ? {backgroundColor: TEXT_INPUT.disabled} : {}}
        disabled={disabled || readOnly}
        InputProps={{
          startAdornment: leftElement ? (
            <InputAdornment position="start">{leftElement}</InputAdornment>
          ) : (
            undefined
          ),
          endAdornment: rightElement ? (
            <InputAdornment position="end">{rightElement}</InputAdornment>
          ) : (
            undefined
          ),
        }}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});

export default TextInput;
