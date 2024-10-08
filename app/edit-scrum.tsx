import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable, TextInput } from 'react-native';
import { Link } from 'expo-router';
import React from 'react'


export default function About() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Edit Scrum Page</Text>
      <Link style={styles.link} href="/"> {"< "}Back</Link>
      <StatusBar style="auto" />
      <Text>Meeting Name:</Text>
      <Text>Meeting Length (minutes):</Text>
      <Text>Attendees (comma-separated):</Text>
      
      <TextInput
        style={styles.input}
        
      />


      <Pressable style={styles.button}>
        <Text style={styles.text}>Save Scrum</Text>
      </Pressable>

    </SafeAreaView>
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
    width: 72,
    textAlign: 'center',
    padding: 6,
    margin: 4,
    position: "absolute",
    top: 4,
    left: 4
  },
  button: {
    padding: 12,
    borderWidth: 2,
    
    borderRadius: 5,
    backgroundColor: 'black',
    color: 'red',
    textAlign: 'center',
    bottom: -100,
  },
  text: {
    color: 'white'
  },
  input: { 

  }
});
