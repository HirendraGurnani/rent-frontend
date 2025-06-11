import * as YUP from 'yup';

const loginSchema = YUP.object({
  email: YUP.string()
    .email('Invalid email format')
    .required('Email is required'),
  
  password: YUP.string()
  .oneOf([YUP.ref("password")],"pasword and repassword should be same")
    .required('Password is required')
});

export default loginSchema;
