import React, {ReactNode} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Portal, Provider } from 'react-native-paper';

type Props = {
  visible?: boolean;
  children: ReactNode;
  onDismiss?: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function ModalView(props: Props) {
  let {visible = false, children, onDismiss, style} = props;

  if (!visible) {
    return null;
  }

  return (
    <Provider>
        <Portal>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Overlay onDismiss={onDismiss} />
            <View style={[styles.content, style] as StyleProp<ViewStyle>}>
              {children}
            </View>
          </View>
        </View>
      </Portal>
    </Provider>
    
  );
}

type OverlayProps = {
  onDismiss?: () => void;
};

function Overlay({onDismiss}: OverlayProps) {
  return (
    <TouchableWithoutFeedback onPress={onDismiss}>
      <View style={styles.overlay}></View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 320,
    maxWidth: 450,
    maxHeight: '100%',
    minHeight: 568,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    position: 'relative',
  },
});
