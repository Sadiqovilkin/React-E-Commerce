import * as yup from 'yup';

const AdminLoginSchema = yup.object().shape({
  username: yup.string().required('Istifadeci adı Vacibdir'),
  password: yup.string().required('Şifre Vacibdir'),
});
export default AdminLoginSchema