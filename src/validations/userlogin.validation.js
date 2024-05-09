import * as yup from 'yup';

const UserLoginSchema = yup.object().shape({
  username: yup.string().required('Istifadeci adı Vacibdir'),
  email: yup.string().required('Istifadeci adı Vacibdir'),
  password: yup.string().required('Şifre Vacibdir'),
});
export default UserLoginSchema