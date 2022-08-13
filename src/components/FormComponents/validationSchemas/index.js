import * as yup from 'yup';
const idRules = /[0-9]{8}/;
const passRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const telRules = /[0-9]{8}/;
const nameRules = /^[A-Za-z]\w*$/;

export const loginSchema = yup.object().shape({
    studentID:yup.string().matches(idRules,'ID must be 8 digits').required('*Field is required'),
    login_password:yup.string().required('*Field is required')
})

export const signupSchema = yup.object().shape({
    firstName:yup.string().matches(nameRules,'Must start with a letter').required('*Field is required'),
    lastName:yup.string().matches(nameRules,'Must start with a letter').required('*Field is required'),
    studentID:yup.string().matches(idRules,'ID must be 8 digits').required('*Field is required'),
    password: yup.string().min(5).matches(passRules, "Please enter a password that contains 5 characters, 1 upperCase, 1 lowerCase, and 1 numeric digit.").required("*Field is required"),
    passwordRepeat:yup.string().oneOf([yup.ref('password'), null],"passwords must match"),
    campusSite:yup.string().required('*Field is required'),
    phoneNumber:yup.string().matches(telRules, "must be 8 digits long").required('*Field is required'),
})
