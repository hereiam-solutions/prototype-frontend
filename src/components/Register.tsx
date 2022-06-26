import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import LoadingIndicator from './LoadingIndicator';

// define the schema / rules for the form validation
const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too short!').required('No password provided.'),
});

type formValuesType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const Register = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: formValuesType) => {
    setLoading(true);
    //TODO handle login/create

    setLoading(false);
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}

          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}

          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <Field name="password" type="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
