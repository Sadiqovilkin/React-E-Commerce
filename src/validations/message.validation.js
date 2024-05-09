import * as yup from 'yup';

const MessageSchema = yup.object().shape({
  fullName: yup.string().required('Tam ad Vacibdir'),
  email: yup.string().email('Duzgun bir email adresi daxil edin').required('Email Vacibdir'),
  title: yup.string().required('Başlık Vacibdir'),
  message: yup.string().min(10, 'Mesaj en az 10 xarakter olmalıdır').required('Mesaj Vacibdir')
});
export default MessageSchema