
import * as Yup from "yup";



const EditPasswordSchema = Yup.object({
      oldPassword: Yup.string()
        .required("Old password is required"),
      newPassword: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("New password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm password is required"),
    })
    export default EditPasswordSchema;