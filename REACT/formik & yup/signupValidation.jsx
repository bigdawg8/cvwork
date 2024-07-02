import * as Yup from 'yup';
export const signupValidation = Yup.object({
    name:Yup.string().min(3).required("Please Enter name"),
    email:Yup.string().email("Please Enter Valid Email").required("Please enter email"),
    password:Yup.string().min(5).required("Please enter password"),
    cpassword:Yup.string().oneOf([Yup.ref("password")],"Password not matched").required("Please Confirm password")
})