import * as Yup from "yup";

const EditProfileSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
  .required("Email is required")
    .email("Invalid email format"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  gender: Yup.string().required("Gender is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone must be a number")
    .required("Phone is required"),
});
export default EditProfileSchema;
