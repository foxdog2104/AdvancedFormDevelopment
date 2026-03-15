import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to our app!</Text>
      <Text style={styles.subTitle}>Advanced form development assignment</Text>
      <Text style={styles.content}>Group 11, Davinderdeep Singh, Willow Reidy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 600,
    marginBottom: 20
  },
  content: {
    fontSize: 18,
    textAlign: 'center'
  }
});