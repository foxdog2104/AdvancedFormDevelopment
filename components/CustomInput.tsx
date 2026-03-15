import React from "react";
import { View, Text, TextInput, StyleSheet, TextInputProps } from "react-native";

type Props = {
  label: string;
  error?: string;
  touched?: boolean;
} & TextInputProps;

export default function CustomInput({ label, error, touched, ...props }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput style={styles.input} {...props} />

      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 6,
  },
  error: {
    color: "red",
    marginTop: 4,
  },
});