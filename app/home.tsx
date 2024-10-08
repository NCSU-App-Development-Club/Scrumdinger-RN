import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";

interface Scrum {
  name: string;
  people: number;
  minutes: number;
}

const scrums: Scrum[] = [
  {
    name: "Microservices",
    people: 7,
    minutes: 30,
  },
  {
    name: "Web Development",
    people: 10,
    minutes: 45,
  },
  {
    name: "Backend Development",
    people: 5,
    minutes: 20,
  },
];

const colors = ["#eb4034", "#299682", "#399629"];

const getColor = (key: number) => {
  return colors[key % 3];
};

function ScrumItem(props: { scrum: Scrum; idx: number }) {
  let { minutes, people, name } = props.scrum;
  return (
    <View
      style={{
        backgroundColor: getColor(props.idx),
        borderRadius: 10,
        padding: 10,
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowOffset: { width: 1, height: 2 },
      }}
    >
      <Text>{name}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>⏳ {minutes}</Text>
        <Text>👥 {people}</Text>
      </View>
    </View>
  );
}

export default function About() {
  // TODO: scrollable
  return (
    <SafeAreaView style={styles.container}>
      {/*
      <View>
        <Link style={styles.link} href="/">
          {" "}
          {"< "}Back
        </Link>
      </View>
      */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Daily Scrums</Text>
        <Link style={styles.headerText} href="/add-scrum">
          +
        </Link>
      </View>
      <ScrollView contentContainerStyle={styles.scrumItemsContainer}>
        {scrums.map((scrum, index) => (
          <ScrumItem scrum={scrum} idx={index} key={index} />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
  },
  link: {
    borderWidth: 1,
    width: 72,
    textAlign: "center",
    padding: 6,
    margin: 4,
    position: "absolute",
    top: 4,
    left: 4,
  },
  headerContainer: {
    // TODO: fix
    width: Dimensions.get("window").width * 0.8,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  scrumItemsContainer: {
    width: Dimensions.get("window").width * 0.8,
    justifyContent: "space-between",
    //alignItems: "stretch",
    //alignContent: "space-between",
    gap: 10,
    display: "flex",
  },
  headerText: {
    fontSize: 30,
  },
});
