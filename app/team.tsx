import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';

export interface MeetingProps {
  attendees: string[],
  length: number,
}

export default function About(props: MeetingProps) {
  props = {
    attendees: ["a", "b", "c"],
    length: 30
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Link style={styles.link} href="/"> {"< "}Back</Link>
      </View>
      <Text style={styles.title}>Microservices</Text>
      <View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.body}>
        <View style={styles.meetingLength}>
          <Text style={styles.bold}>Meeting Length</Text>
          <Text style={styles.meetingLengthTime}>: {props.length} minutes</Text>
        </View>
        <View style={styles.attendees}>
          <Text style={styles.bold}>Attendees:</Text>
          <View style={styles.list}>
            {props.attendees.map((attendee) => {
              return(
                <Text>{`\u2022 ` + attendee}</Text>
              )
            })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-start',
    textAlign: 'left',
    width: '100%'
  },
  title: {
    fontSize: 30
  },
  body: {

  },
  list: {
    marginLeft: 8
  },
  meetingLength: {
    display: 'flex',
    flexDirection: 'row'
  },
  bold: {
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    borderWidth: 4,
    padding: 8
  }, link: {
    borderWidth: 1,
    width: 72,
    textAlign: 'center',
    padding: 6,
    margin: 4,
  }
});
