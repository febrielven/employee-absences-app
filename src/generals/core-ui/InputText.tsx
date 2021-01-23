import React, {forwardRef, ReactNode, Ref} from 'react';
import {TextFieldProps} from '@material-ui/core';
import {TextInput as TextField} from 'react-native-paper';
import InputAdornment from '@material-ui/core/InputAdornment';

import {TEXT_INPUT} from '../constants/colors';

export type TextInputCoreUIProps = TextFieldProps & {
  onChangeText?: (input: string) => void;
  label?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  readOnly?: boolean;
};

function TextInput(props: TextInputCoreUIProps, ref: Ref<HTMLDivElement>) {
  let {
    label,
    onChangeText,
    leftElement,
    rightElement,
    readOnly,
    disabled,
    style,
    ...otherProps
  } = props;

  // let combinedStyle = {
  //   ...(disabled ? {backgroundColor: TEXT_INPUT.disabled} : {}),
  //   ...style,
  // };

  return (
    <TextField
      label={label}
      ref={ref}
      variant="outlined"
      onChange={
        onChangeText
          ? (event) => {
              onChangeText && onChangeText(event.target.value);
            }
          : undefined
      }
      disabled={disabled || readOnly}
      InputProps={{
        startAdornment: leftElement ? (
          <InputAdornment position="start">{leftElement}</InputAdornment>
        ) : undefined,
        endAdornment: rightElement ? (
          <InputAdornment position="end">{rightElement}</InputAdornment>
        ) : undefined,
      }}
      {...otherProps}
    />
  );
}

export default forwardRef(TextInput);
