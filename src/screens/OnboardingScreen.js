import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Onboarding Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default OnboardingScreen;
