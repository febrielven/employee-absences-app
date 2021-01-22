import React from 'react';
import {View, Text} from 'react-native';
import MaterialButton from '@material-ui/core/Button';

function Button() {
 return (
    <View>
      <MaterialButton variant="contained"><Text>Login</Text></MaterialButton>
    </View>
  );
}

export default Button;
