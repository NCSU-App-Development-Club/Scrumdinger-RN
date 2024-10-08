import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Link style={styles.link} href="/home">Home</Link>
      <Link style={styles.link} href="/team">Team</Link>
      <Link style={styles.link} href="/add-scrum">Add Scrum</Link>
      <Link style={styles.link} href="/edit-scrum">Edit Scrum</Link>
      <Link style={styles.link} href="/meeting">Meeting</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4
  }, link: {
    borderWidth: 1,
    width: 96,
    textAlign: 'center',
    padding: 6,
    margin: 4
  }
});
