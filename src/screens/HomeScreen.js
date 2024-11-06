import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
  Dimensions,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const scrollY = new Animated.Value(0);

  // Sample data for stories
  const stories = [
    { id: '1', username: 'Your Story', image: 'https://www.familyeducation.com/sites/default/files/inline-images/happy-african-kids-ethiopia.jpg', hasStory: false },
    { id: '2', username: 'john_doe', image: 'https://t3.ftcdn.net/jpg/06/41/33/04/360_F_641330422_m6UwExBu3ajkeeL7DuN0byrrm3V7De6R.jpg', hasStory: true },
    { id: '3', username: 'sarah.k', image: 'https://img.freepik.com/premium-photo/happy-african-american-female-sport-player-celebrating-winning-with-confetti-falling_46383-8255.jpg', hasStory: true },
    { id: '4', username: 'mike_s', image: 'https://media.licdn.com/dms/image/v2/D4D22AQFC8ITHYJsnAQ/feedshare-shrink_800/feedshare-shrink_800/0/1708619261061?e=2147483647&v=beta&t=UJ-CB2ZCbm3JdNot6beeKJOkE0hickacr_9vSEduTVQ', hasStory: true },
    { id: '5', username: 'emma.w', image: 'https://media.licdn.com/dms/image/v2/D4E22AQGQXE9z1Ubkag/feedshare-shrink_800/feedshare-shrink_800/0/1716565194031?e=2147483647&v=beta&t=KFthiuqQ5YbYG0YVMsugMWXlT08fpbb_TKYCdOkK2so', hasStory: true },
  ];

  // Sample data for posts
  const posts = [
    {
      id: '1',
      username: 'john_doe',
      userImage: 'https://st2.depositphotos.com/1715570/10091/i/450/depositphotos_100915966-Happy-young-african-man.jpg',
      location: 'New York, USA',
      image: 'https://media.istockphoto.com/id/1408041355/photo/happy-black-businesswoman-using-a-smartphone-in-a-creative-office.jpg?s=612x612&w=0&k=20&c=5KE901-rSW4iE8oaRlvJ9ZidP0N18dLWpKKuwF3odGY=',
      likes: 1234,
      caption: 'Living my best life! 🌟 #lifestyle #nyc',
      comments: 89,
      timeAgo: '2 hours ago',
    },
    {
      id: '2',
      username: 'sarah.k',
      userImage: 'https://www.familyeducation.com/sites/default/files/inline-images/happy-african-kids-ethiopia.jpg',
      location: 'Paris, France',
      image: 'https://ih1.redbubble.net/image.4927688551.2891/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
      likes: 2567,
      caption: 'Perfect evening in Paris ❤️ #paris #travel',
      comments: 156,
      timeAgo: '4 hours ago',
    },
    // Add more posts as needed
  ];

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate refresh
    setTimeout(() => setRefreshing(false), 2000);
  };

  const renderStory = ({ item }) => (
    <TouchableOpacity style={styles.storyContainer}>
      <LinearGradient
        colors={item.hasStory ? ['#FF5F6D', '#FFC371'] : ['#DDD', '#DDD']}
        style={styles.storyGradient}
      >
        <Image source={{ uri: item.image }} style={styles.storyImage} />
      </LinearGradient>
      <Text style={styles.storyUsername} numberOfLines={1}>
        {item.username}
      </Text>
    </TouchableOpacity>
  );

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderLeft}>
          <Image source={{ uri: item.userImage }} style={styles.postUserImage} />
          <View>
            <Text style={styles.postUsername}>{item.username}</Text>
            <Text style={styles.postLocation}>{item.location}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon name="dots-vertical" size={20} color="#262626" />
        </TouchableOpacity>
      </View>

      <Image source={{ uri: item.image }} style={styles.postImage} />

      <View style={styles.postActions}>
        <View style={styles.postActionsLeft}>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="heart-outline" size={26} color="#262626" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="comment-outline" size={26} color="#262626" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="send-outline" size={26} color="#262626" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Icon name="bookmark-outline" size={26} color="#262626" />
        </TouchableOpacity>
      </View>

      <View style={styles.postStats}>
        <Text style={styles.likesText}>{item.likes.toLocaleString()} likes</Text>
      </View>

      <View style={styles.captionContainer}>
        <Text style={styles.caption}>
          <Text style={styles.postUsername}>{item.username}</Text> {item.caption}
        </Text>
      </View>

      <TouchableOpacity style={styles.commentsButton}>
        <Text style={styles.commentsText}>
          View all {item.comments} comments
        </Text>
      </TouchableOpacity>

      <Text style={styles.timeAgo}>{item.timeAgo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Feed</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="plus-box-outline" size={26} color="#262626" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="heart-outline" size={26} color="#262626" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="message-outline" size={26} color="#262626" />
          </TouchableOpacity>
        </View>
      </View>

      <Animated.FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <FlatList
            data={stories}
            renderItem={renderStory}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.storiesContainer}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#262626"
          />
        }
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#262626',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    marginLeft: 20,
  },
  storiesContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA',
    paddingVertical: 10,
  },
  storyContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 70,
  },
  storyGradient: {
    padding: 3,
    borderRadius: 35,
  },
  storyImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  storyUsername: {
    fontSize: 12,
    marginTop: 4,
    color: '#262626',
  },
  postContainer: {
    marginBottom: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  postHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postUserImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  postUsername: {
    fontSize: 14,
    fontWeight: '600',
    color: '#262626',
  },
  postLocation: {
    fontSize: 12,
    color: '#666',
  },
  postImage: {
    width: width,
    height: width,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  postActionsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginRight: 15,
  },
  postStats: {
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  likesText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#262626',
  },
  captionContainer: {
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  caption: {
    fontSize: 14,
    color: '#262626',
    lineHeight: 18,
  },
  commentsButton: {
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  commentsText: {
    fontSize: 14,
    color: '#8E8E8E',
  },
  timeAgo: {
    fontSize: 12,
    color: '#8E8E8E',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
});

export default HomeScreen;