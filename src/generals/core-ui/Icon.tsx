import React from 'react';
import {View, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';

import {ICON as ICON_COLOR} from '../constants/colors';
import {ICON_SIZE} from '../constants/size';

import SVGList from '../../../assets/svg';

type Props = {
  name: IconKey;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  color?: keyof typeof ICON_COLOR;
  size?: keyof typeof ICON_SIZE;
};

function Icon(props: Props) {
  let {
    name,
    containerStyle,
    onPress,
    color = 'default',
    size = 'default',
  } = props;

  let ComponentName = SVGList[name as IconKey];
  let ComponentIcon = (
    <ComponentName color={ICON_COLOR[color]} size={ICON_SIZE[size]} />
  );

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
