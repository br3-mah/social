import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Login Screen</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};

export default LoginScreen;
