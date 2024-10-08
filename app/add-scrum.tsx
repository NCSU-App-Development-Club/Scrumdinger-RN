import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';


interface TextFieldProps {
  label: string;
  hinttext: string;
}

export default function About() {
  return (
    <>
      <View style={styles.titleView}>
        <Link style={styles.link} href="/">
          <Icon name="arrow-back" size={30} color="#000" />
        </Link>
        <Text style={styles.titleText}>Daily Scrums</Text>
      </View>
      <SafeAreaView style={styles.container}>

        <TextField label="Meeting Name:" hinttext="Default" />
        <TextField label="Meeting Length (minutes):" hinttext="Minutes" />
        <TextField label="Attendees (comma-seperated):" hinttext="Minutes" />
        <AddScrumButton />
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

export function AddScrumButton() {
  return (
    <Pressable style={styles.addScrumButton} onPress={() => { }}>
      <Text style={styles.addScrumButtonText}>Add Scrum</Text>
    </Pressable>
  )
}

export function TextField({ label, hinttext }: TextFieldProps): JSX.Element {
  return (
    <View style={styles.textView}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput placeholder={hinttext} style={styles.textBox} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 8,
    marginBottom: 24,
    alignContent: 'flex-start'
  },
  titleText: {
    fontSize: 20,
    fontWeight: '300',
    paddingStart: 10,
  },
  labelText: {
    fontSize: 16,
    paddingBottom: 8
  },
  link: {
  },
  textBox: {
    borderColor: '#D3D3D3',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
    textAlign: 'left',
  },
  textView: {
    minWidth: '80%',
    paddingBottom: 24,
  },
  addScrumButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  addScrumButtonText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '600',
    letterSpacing: 0.25,
    color: 'white',
  },


});
