import * as YUP from "yup";

const ContactSchema = YUP.object({
  username: YUP.string().required("Name is required"),
  email: YUP.string().email("Invalid email").required("Email is required"),
  message: YUP.string().required("Message is required"),
});

export default ContactSchema;
