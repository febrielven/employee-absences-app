import React, {forwardRef, ReactNode, Ref, ChangeEvent} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {TextInput as TextField} from 'react-native-paper';
import InputAdornment from '@material-ui/core/InputAdornment';

import {TEXT_INPUT} from '../constants/colors';

export type TextInputCoreUIProps = {
  onChangeText?: (input: string) => void;
  onChange:(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>void;
  label?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  readOnly?: boolean;
  disabled?: boolean;
  style:StyleProp<TextStyle>
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

  return (
    <TextField
      mode='outlined'
      label={label}
      ref={ref}
      variant="outlined"
      onChange={
        onChangeText
          ? (event:any) => {
              onChangeText && onChangeText(event.target.value);
            }
          : undefined
      }
      style={style}
      disabled={disabled || readOnly}
      {...otherProps}
    />
  );
}

export default forwardRef(TextInput);
