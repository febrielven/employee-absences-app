import React, {ReactNode} from 'react';
import {Text as ReactText, StyleProp, TextStyle, TextProps} from 'react-native';

import {TEXT as TEXT_COLOR} from '../constants/colors';
import {FONT_SIZE} from '../constants/size';

type FontSize = keyof typeof FONT_SIZE;
type TypeColor = keyof typeof TEXT_COLOR;

type Props = TextProps & {
  size?: FontSize;
  typeColor?: TypeColor;
  bold?: boolean;
  italic?: boolean;
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
};

function Text(props: Props) {
  let {
    size = 'default',
    typeColor = 'default',
    bold,
    italic,
    style,

    ...otherProps
  } = props;

  let defaultStyle: StyleProp<TextStyle> = [
    {
      fontSize: FONT_SIZE[size],
      color: TEXT_COLOR[typeColor],
    },
    bold && {fontWeight: 'bold'},
    italic && {fontStyle: 'italic'},
    style,
  ];

  return (
    <ReactText style={defaultStyle} {...otherProps}>
      Text
    </ReactText>
  );
}

export default Text;
