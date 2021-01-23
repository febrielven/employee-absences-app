import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
} from 'react-native';
import {ICON_SIZE} from '../constants/size';
import IconList from '../../../assets/icons';

type Props = {
  name: IconKey;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  size?: keyof typeof ICON_SIZE;
};

function Icon(props: Props) {
  let {name = 'camera', containerStyle, onPress, size = 'default'} = props;

  let ComponentName = IconList[name];
  let ComponentIcon = <Image source={ComponentName} style={styles.icons} />;

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} style={containerStyle}>
        {ComponentIcon}
      </TouchableOpacity>
    );
  }

  return <View style={containerStyle}>{ComponentIcon}</View>;
}

export default Icon;

const styles = StyleSheet.create({
  icons: {
    height: 40,
    width: 40,
    marginTop: 4,
  },
});
