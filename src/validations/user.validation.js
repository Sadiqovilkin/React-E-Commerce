import * as yup from 'yup';

const UsersSchema = yup.object().shape({
  username: yup.string().min(3, 'istifadeci adı en az 3 xarakter olmalıdır').required('Istifadeci adı Vacibdir'),
  password: yup.string().min(5, 'Şifre en az 5 xarakter olmalıdır').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Şifre en az 1 kicik herf, 1 boyuk herf ve 1 reqem olmalıdır').required('Şifre Vacibdir'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Şifreler eyni olmalidir').required('Şifre dogrulamaq Vacibdir'),
  email: yup.string().email('Duzgun bir email adresi giriniz').required('Email Vacibdir'),
  profileImg: yup.string().url('Duzgun bir URL giriniz').required('Profil resmi Vacibdir'),
  balance: yup.number().positive('balans pozitif olmalıdır').integer('balans tam reqem olmalıdır').required('balans Vacibdir')
});
export default UsersSchema