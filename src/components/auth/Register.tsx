import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import LoadingIndicator from '../LoadingIndicator';
import useRealm from '../../hooks/useRealm';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useNavigation from '../../hooks/useNavigation';

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
  password: Yup.string().min(8, 'Too short!').required('Required'),
});

// create a type for the values in the form
type formValuesType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const Register = () => {
  // get the realm connection from the context
  const { realm } = useRealm();

  const { isDrawOpen, setIsDrawOpen } = useNavigation();

  let navigate = useNavigate();

  // initalize a loading state to conditionally render a loading indicator component
  const [loading, setLoading] = useState(false);

  // function that is called upon form submission, tries to register the user in realm
  const handleRegister = async (values: formValuesType) => {
    try {
      setLoading(true);

      const reg = await realm.emailPasswordAuth.registerUser({
        email: values.email,
        password: values.password,
      });

      console.log('reg', reg);
      console.log('current user: ', realm.currentUser);

      setLoading(false);

      setIsDrawOpen(false);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        validationSchema={userSchema}
        onSubmit={handleRegister}
      >
        {({ errors, touched }) => (
          <Form>
            <StyledField name="firstName" placeholder="First Name" />
            {errors.firstName && touched.firstName ? (
              <StyledInlineErrorMessage>
                {errors.firstName}
              </StyledInlineErrorMessage>
            ) : null}

            <StyledField name="lastName" placeholder="Last Name" />
            {errors.lastName && touched.lastName ? (
              <StyledInlineErrorMessage>
                {errors.lastName}
              </StyledInlineErrorMessage>
            ) : null}

            <StyledField name="email" type="email" placeholder="Email" />
            {errors.email && touched.email ? (
              <StyledInlineErrorMessage>
                {errors.email}
              </StyledInlineErrorMessage>
            ) : null}

            <StyledField
              name="password"
              type="password"
              placeholder="Password"
            />
            {errors.password && touched.password ? (
              <StyledInlineErrorMessage>
                {errors.password}
              </StyledInlineErrorMessage>
            ) : null}

            <StyledButton type="submit">Register</StyledButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

const StyledField = styled(Field)`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
      rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }
`;

const StyledInlineErrorMessage = styled.div`
  color: red;
`;
const StyledButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;

  background-color: rgb(24, 81, 187);
  display: block;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 700;
  height: 3rem;
  white-space: nowrap;
  color: rgb(232, 243, 255) !important;
  padding: 0.5rem 1rem;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;

export default Register;
