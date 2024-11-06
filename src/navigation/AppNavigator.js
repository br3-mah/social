import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import your screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Custom drawer content component
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView 
      {...props}
      contentContainerStyle={styles.drawerContent}
    >
      {/* User Profile Section */}
      <View style={styles.userSection}>
        <View style={styles.avatarContainer}>
          <Icon name="account-circle" size={60} color="#FFFFFF" />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john@example.com</Text>
        </View>
      </View>
      
      {/* Drawer Items */}
      <DrawerItemList {...props} />
      
      {/* Custom Drawer Items */}
      <DrawerItem
        label="Logout"
        labelStyle={styles.drawerItemLabel}
        icon={({ color, size }) => (
          <Icon name="logout" color={color} size={size} />
        )}
        onPress={() => {
          // Handle logout
          console.log('Logout pressed');
        }}
      />
    </DrawerContentScrollView>
  );
};

// Stack navigators for each main screen
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Home" 
      component={HomeScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <Icon
            name="menu"
            size={24}
            style={styles.headerIcon}
            onPress={() => navigation.openDrawer()}
          />
        ),
      })}
    />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Profile" 
      component={ProfileScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <Icon
            name="menu"
            size={24}
            style={styles.headerIcon}
            onPress={() => navigation.openDrawer()}
          />
        ),
      })}
    />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Settings" 
      component={SettingsScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <Icon
            name="menu"
            size={24}
            style={styles.headerIcon}
            onPress={() => navigation.openDrawer()}
          />
        ),
      })}
    />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: styles.drawer,
          drawerActiveBackgroundColor: '#2C2C2C',
          drawerActiveTintColor: '#FFFFFF',
          drawerInactiveTintColor: '#AAAAAA',
          drawerLabelStyle: styles.drawerItemLabel,
        }}
      >
        <Drawer.Screen 
          name="HomeStack" 
          component={HomeStack}
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen 
          name="ProfileStack" 
          component={ProfileStack}
          options={{
            drawerLabel: 'Profile',
            drawerIcon: ({ color, size }) => (
              <Icon name="account" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen 
          name="SettingsStack" 
          component={SettingsStack}
          options={{
            drawerLabel: 'Settings',
            drawerIcon: ({ color, size }) => (
              <Icon name="cog" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#1E1E1E',
    width: 280,
  },
  drawerContent: {
    flex: 1,
  },
  userSection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2C',
    marginBottom: 8,
  },
  avatarContainer: {
    marginBottom: 12,
    alignItems: 'center',
  },
  userInfo: {
    alignItems: 'center',
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userEmail: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  drawerItemLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: -16,
  },
  headerIcon: {
    marginLeft: 16,
    color: '#000000',
  },
});

export default AppNavigator;