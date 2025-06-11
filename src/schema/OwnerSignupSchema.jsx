import * as YUP from 'yup';


const ownerSchema = YUP.object({
    name: YUP.string().required("Name is required"),
    email: YUP.string().email().required("Email is required"),
    phone: YUP.number().typeError("Insert Number").required("Phone is required"),
    address: YUP.string().required("Address is required"),
    state: YUP.string().required("State is required"),
    city: YUP.string().required("City is required"),
    // propertyType: YUP.string().required("Property Type is required"),
    // propertyLocation: YUP.string().required("Property Location Type is required"),
    password: YUP.string().oneOf([YUP.ref("password")],"pasword and repassword should be same").required("Password is required"),
    repassword: YUP.string().oneOf([YUP.ref("password")],"pasword and repassword should be same").required("Re-Password is required")

});

export default ownerSchema;