import * as yup from 'yup';

const productSchema = yup.object().shape({
  name: yup.string().required(' ad Vacibdir'),
  salePrice: yup.number().required('salePrice adı Vacibdir').min(0),
  costPrice: yup.number().required('costPrice adı Vacibdir').min(0),
  imgSrc: yup.string().url('Duzgun bir URL giriniz').required('ProductImg Vacibdir'),
  discountPercentage: yup.number().min(0).max(100),
  description: yup.string().min(10).required('Is Required'),
  categoryId: yup.string().required('Is Required'),
  stockCount: yup.number().required('Is Required').min(1),
});

export default productSchema;