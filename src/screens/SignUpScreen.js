import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Sign Up Screen</Text>
      <Button title="Onboarding" onPress={() => navigation.navigate('Onboarding')} />
    </View>
  );
};

export default SignUpScreen;
