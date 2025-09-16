import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>M Y  G O A L S</Text>

      {/* Navigate to goals list */}
      <Link style={styles.link} href="/goals">
        View Your Goals
      </Link>

      {/* Navigate to create goal */}
      <Link style={styles.link} href="/goals/create">
        Add a New Goal
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // center vertically
    backgroundColor: '#f8f8f8',
  },
  title: {
    marginBottom: 30,
    fontSize: 28,
    fontWeight: 'bold',
  },
  link: {
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#21cc8d',
    color: 'white',
    borderRadius: 8,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Home;
