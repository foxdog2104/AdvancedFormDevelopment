import * as Yup from "yup";

export const employeeSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name too short")
    .required("Name is required"),

  employeeId: Yup.string()
    .required("Employee ID required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email required"),

  phone: Yup.string()
    .min(10, "Phone number too short")
    .required("Phone number required"),

  department: Yup.string()
    .required("Department required"),
});