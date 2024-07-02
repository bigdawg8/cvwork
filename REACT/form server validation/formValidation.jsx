import * as Yup from 'yup';

export const formValidation = Yup.object({
    username:Yup.string().min(5).required("Please enter username"),
    email:Yup.string().email("Please enter valid email").required("Please enter email"),
    password:Yup.string().min(10).required("Please enter password")
})