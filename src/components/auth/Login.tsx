import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import LoadingIndicator from '../LoadingIndicator';
import useRealm from '../../hooks/useRealm';
import styled from 'styled-components';
import * as Realm from 'realm-web';
import { useNavigate } from 'react-router-dom';
import useNavigation from '../../hooks/useNavigation';

// define the schema / rules for the form validation
const userSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too short!').required('Required'),
});

// create a type for the values in the form
type formValuesType = {
  email: string;
  password: string;
};

const Login = () => {
  let navigate = useNavigate();
  // get the realm connection from the context
  const { realm } = useRealm();

  const { isDrawOpen, setIsDrawOpen } = useNavigation();

  // initalize a loading state to conditionally render a loading indicator component
  const [loading, setLoading] = useState(false);

  // function that is called upon form submission, tries to login the user in realm
  const handleSubmit = async (values: formValuesType) => {
    try {
      setLoading(true);

      const credentials = Realm.Credentials.emailPassword(
        values.email,
        values.password
      );

      const reg = await realm.logIn(credentials);

      console.log('reg', reg);
      console.log('current user: ', realm.currentUser);

      setLoading(false);

      //   setIsDrawOpen(false);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
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
        <StyledForm>
          <StyledField name="email" type="email" placeholder="Email" />
          {errors.email && touched.email ? (
            <StyledInlineErrorMessage>{errors.email}</StyledInlineErrorMessage>
          ) : null}

          <StyledField name="password" type="password" placeholder="Password" />
          {errors.password && touched.password ? (
            <StyledInlineErrorMessage>
              {errors.password}
            </StyledInlineErrorMessage>
          ) : null}

          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};

const StyledForm = styled(Form)`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
`;

const StyledInlineErrorMessage = styled.div`
  color: red;
`;

const StyledButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;

  background-color: rgb(24, 81, 187);
  text-align: center;
  height: 3rem;
  color: white;
`;

export default Login;
