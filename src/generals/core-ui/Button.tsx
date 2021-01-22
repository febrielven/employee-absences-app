import React, {ReactNode} from 'react';
import {
  ActivityIndicator,
  View,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Text from './Text';

import {BUTTON} from '../constants/colors';

type ButtonType = 'default' | 'primary' | 'secondary';

type Props = {
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
    isLoading = false,
    disabled = false,
    onPress,
    buttonType = 'default' as ButtonType,
    containerStyle,
  } = props;

  let buttonStyle = styles.default;
  if (buttonType === 'primary') {
    buttonStyle = styles.primary;
  } else if (buttonType === 'secondary') {
    buttonStyle = styles.secondary;
  }

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={StyleSheet.flatten([
          styles.boxButton,
          disabled ? styles.disabled : buttonStyle,
        ])}
        disabled={disabled}
        onPress={onPress}
      >
        <Text
          typeColor={
            buttonType === 'primary' || disabled ? 'default' : 'secondary'
          }
          style={styles.coreStyle}
        >
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  coreStyle: {
    fontWeight: 'bold',
  },
  boxButton: {
    margin: 5,
    padding: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  default: {
    borderColor: BUTTON.default.border,
    backgroundColor: BUTTON.default.background,
    color: BUTTON.default.text,
  },
  primary: {
    borderColor: BUTTON.primary.border,
    backgroundColor: BUTTON.primary.background,
    color: BUTTON.primary.text,
  },
  secondary: {
    borderColor: BUTTON.secondary.border,
    backgroundColor: BUTTON.secondary.background,
    color: BUTTON.secondary.text,
  },
  disabled: {
    borderColor: BUTTON.disabled.border,
    backgroundColor: BUTTON.disabled.background,
    color: BUTTON.disabled.text,
  },
});

// const styles = createStyles({
//   coreStyle: {
//     fontWeight: 'bold',
//   },
//   default: {
//     borderColor: BUTTON.default.border,
//     backgroundColor: BUTTON.default.background,
//     color: BUTTON.default.text,
//     border: '1px solid',
//     '&:hover': {
//       backgroundColor: BUTTON.default.hover,
//     },
//   },
//   primary: {
//     borderColor: BUTTON.primary.border,
//     backgroundColor: BUTTON.primary.background,
//     border: '1px solid',
//     '&:hover': {
//       backgroundColor: BUTTON.primary.hover,
//     },
//   },
//   secondary: {
//     backgroundColor: BUTTON.secondary.background,
//     color: BUTTON.secondary.text,
//     '&:hover': {
//       backgroundColor: BUTTON.secondary.hover,
//     },
//   },
// });
