import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import * as Progress from 'react-native-progress';
// import Icon from 'react-native-vector-icons';

import { useCountdown } from 'react-native-countdown-circle-timer'



export default function About() {

  const [isPlaying, setIsPlaying] = React.useState(true)

  return (
    <SafeAreaView style={styles.container}>
      <Text id = "head">Microservices</Text>
      <Link style={styles.link} href="/"> {"< "}Back</Link>
      <StatusBar style="auto" />
      <CountdownCircleTimer
        size = {300}
        isPlaying={isPlaying}
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 2 })}
        updateInterval={1}
    >
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 40 }}>
          {remainingTime}
        </Text>
      )}
    </CountdownCircleTimer>
  </SafeAreaView>
  )
  
}

const UrgeWithPleasureComponent = () => (
  <CountdownCircleTimer
    isPlaying
    duration={7}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => <Text>{remainingTime}</Text>}
  </CountdownCircleTimer>
)

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
  }, head: {
    marginTop: 0
  }
  
});


