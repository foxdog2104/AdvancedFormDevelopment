import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import CustomInput from "../components/CustomInput";
import SubmitButton from "../components/SubmitButton";
import { signInSchema } from "../validation/authSchema";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signInSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <CustomInput
              label="Email"
              placeholder="Enter email"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
            />

            <CustomInput
              label="Password"
              placeholder="Enter password"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password}
              touched={touched.password}
              secureTextEntry
            />

            <SubmitButton title="Sign In" onPress={handleSubmit as any} />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
});