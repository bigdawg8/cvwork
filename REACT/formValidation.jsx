import * as Yup from 'yup';
export const formValidation = Yup.object({
  username:Yup.string().required("Enter username"),
  email:Yup.string().email("Enter valid email").required("Enter email"),
  password:Yup.string().required("Enter password"),
  cpassword:Yup.string().oneOf([Yup.ref("password")],"Password does not match").required("Please Confirm Password")
})