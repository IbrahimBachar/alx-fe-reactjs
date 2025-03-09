import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('User registered:', values);
    alert('User registered successfully!');
    resetForm();
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" component="span" style={{ color: 'red' }} />

          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="span" style={{ color: 'red' }} />

          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="span" style={{ color: 'red' }} />

          <button type="submit" disabled={isSubmitting}>Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
