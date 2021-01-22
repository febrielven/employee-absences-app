import React, {ReactNode} from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';
import {createStyles, withStyles, WithStyles} from '@material-ui/core';
import MaterialButton, {ButtonProps} from '@material-ui/core/Button';
import classNames from 'classnames';

import {BUTTON} from '../constants/colors';

type ButtonType = 'default' | 'primary' | 'secondary';

type Props = WithStyles<typeof styles> &
  ButtonProps & {
    onPress?: () => void;
    buttonType?: ButtonType;
    isLoading?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    containerStyle?: ViewStyle;
  };

function Button(props: Props) {
  let {
    children,
    classes,
    isLoading = false,
    disabled = false,
    onPress,
    buttonType = 'default' as ButtonType,
    containerStyle,
    ...otherProps
  } = props;

  let buttonStyle = disabled
    ? classes.coreStyle
    : classNames(classes.coreStyle, classes[buttonType]);

  return (
    <View style={containerStyle}>
      <MaterialButton
        variant="contained"
        onClick={onPress}
        disabled={disabled}
        className={buttonStyle}
        disableRipple={isLoading}
        {...otherProps}
      >
        {isLoading ? (
          <ActivityIndicator size={24} color={BUTTON[buttonType].loading} />
        ) : (
          children
        )}
      </MaterialButton>
    </View>
  );
}

const styles = createStyles({
  coreStyle: {
    fontWeight: 'bold',
  },
  default: {
    borderColor: BUTTON.default.border,
    backgroundColor: BUTTON.default.background,
    color: BUTTON.default.text,
    border: '1px solid',
    '&:hover': {
      backgroundColor: BUTTON.default.hover,
    },
  },
  primary: {
    borderColor: BUTTON.primary.border,
    backgroundColor: BUTTON.primary.background,
    border: '1px solid',
    '&:hover': {
      backgroundColor: BUTTON.primary.hover,
    },
  },
  secondary: {
    backgroundColor: BUTTON.secondary.background,
    color: BUTTON.secondary.text,
    '&:hover': {
      backgroundColor: BUTTON.secondary.hover,
    },
  },
});

export default withStyles(styles)(Button);
