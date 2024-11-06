import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [privateAccount, setPrivateAccount] = useState(false);

  const userStats = {
    posts: 128,
    followers: 1250,
    following: 845,
  };

  const handleEditProfile = () => {
    // Navigate to edit profile screen
    Alert.alert('Edit Profile', 'Navigate to edit profile form');
  };

  const renderProfileHeader = () => (
    <View style={styles.profileHeader}>
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <TouchableOpacity 
          style={styles.editImageButton}
          onPress={() => Alert.alert('Change Photo', 'Open image picker')}
        >
          <Icon name="camera" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <Text style={styles.userName}>John Doe</Text>
      <Text style={styles.userHandle}>@johndoe</Text>
      <Text style={styles.userBio}>
        Software Developer | Coffee Enthusiast | Adventure Seeker
      </Text>
      <TouchableOpacity 
        style={styles.editProfileButton}
        onPress={handleEditProfile}
      >
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );

  const renderStats = () => (
    <View style={styles.statsContainer}>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{userStats.posts}</Text>
        <Text style={styles.statLabel}>Posts</Text>
      </View>
      <View style={styles.statDivider} />
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{userStats.followers}</Text>
        <Text style={styles.statLabel}>Followers</Text>
      </View>
      <View style={styles.statDivider} />
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{userStats.following}</Text>
        <Text style={styles.statLabel}>Following</Text>
      </View>
    </View>
  );

  const renderSettingsItem = (icon, label, value, onToggle) => (
    <View style={styles.settingsItem}>
      <View style={styles.settingsItemLeft}>
        <Icon name={icon} size={24} color="#333" style={styles.settingsIcon} />
        <Text style={styles.settingsLabel}>{label}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
      />
    </View>
  );

  const renderActionItem = (icon, label, onPress) => (
    <TouchableOpacity style={styles.actionItem} onPress={onPress}>
      <Icon name={icon} size={24} color="#333" style={styles.actionIcon} />
      <Text style={styles.actionLabel}>{label}</Text>
      <Icon name="chevron-right" size={24} color="#999" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {renderProfileHeader()}
      {renderStats()}
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        {renderSettingsItem(
          'bell-outline',
          'Notifications',
          notifications,
          setNotifications
        )}
        {renderSettingsItem(
          'moon-waning-crescent',
          'Dark Mode',
          darkMode,
          setDarkMode
        )}
        {renderSettingsItem(
          'lock-outline',
          'Private Account',
          privateAccount,
          setPrivateAccount
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        {renderActionItem('account-cog', 'Account Settings', () => 
          Alert.alert('Account Settings', 'Navigate to account settings')
        )}
        {renderActionItem('shield-check', 'Privacy', () =>
          Alert.alert('Privacy', 'Navigate to privacy settings')
        )}
        {renderActionItem('help-circle', 'Help & Support', () =>
          Alert.alert('Help', 'Navigate to help center')
        )}
        {renderActionItem('information', 'About', () =>
          Alert.alert('About', 'Navigate to about page')
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editImageButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#2196F3',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userHandle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  userBio: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  editProfileButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  editProfileText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#E0E0E0',
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsIcon: {
    marginRight: 15,
  },
  settingsLabel: {
    fontSize: 16,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  actionIcon: {
    marginRight: 15,
  },
  actionLabel: {
    fontSize: 16,
    flex: 1,
  },
});

export default ProfileScreen;