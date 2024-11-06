import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 5000);
  }, []);

  return (
    <View style={globalStyles.container}>
      <ActivityIndicator size="large" color="#3498db" />
      <Text style={globalStyles.heading}>Loading...</Text>
    </View>
  );
};

export default SplashScreen;
