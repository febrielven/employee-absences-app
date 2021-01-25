import React, {ChangeEvent} from 'react';
import {Controller, UseControllerOptions} from 'react-hook-form';
import {InputTextNative, TextInputNativeProps} from '../core-ui';

type Props = UseControllerOptions &
  TextInputNativeProps& {
    transformOutput?: (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => any;
  };

function ControlledTextInput(props: Props) {
  let {
    control,
    name,
    rules,
    transformOutput,
    defaultValue = '',
    ...textInputProps
  } = props;
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({onChange, ...controllerProps}) => (
        <InputTextNative
          {...textInputProps}
          {...controllerProps}
          onChange={
            transformOutput
              ? (data:any) => {
                  onChange(transformOutput && transformOutput(data));
                }
              : onChange
          }
        />
      )}
    />
  );
}

export default ControlledTextInput;
