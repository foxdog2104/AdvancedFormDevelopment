import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import CustomInput from "../components/CustomInput";
import SubmitButton from "../components/SubmitButton";
import { employeeSchema } from "../validation/employeeSchema";

export default function EmployeeForm() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: "",
          employeeId: "",
          email: "",
          phone: "",
          department: "",
        }}
        validationSchema={employeeSchema}
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
              label="Full Name"
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              error={errors.name}
              touched={touched.name}
            />

            <CustomInput
              label="Employee ID"
              value={values.employeeId}
              onChangeText={handleChange("employeeId")}
              onBlur={handleBlur("employeeId")}
              error={errors.employeeId}
              touched={touched.employeeId}
            />

            <CustomInput
              label="Email"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
            />

            <CustomInput
              label="Phone"
              value={values.phone}
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              error={errors.phone}
              touched={touched.phone}
            />

            <CustomInput
              label="Department"
              value={values.department}
              onChangeText={handleChange("department")}
              onBlur={handleBlur("department")}
              error={errors.department}
              touched={touched.department}
            />

            <SubmitButton title="Submit" onPress={handleSubmit as any} />
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