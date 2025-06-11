import * as Yup from "yup";

const seekerSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.number().typeError("Insert Number").required("Phone number is required"),
    gender: Yup.string().required("Gender is required"),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    password: Yup.string().oneOf([Yup.ref("password")], "Password and repassword shold be same ").required("Password is required"),
    repassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Re-password is required"),
});

export default seekerSchema;