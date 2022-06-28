import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import LoadingIndicator from '../LoadingIndicator';
import useRealm from '../../hooks/useRealm';
import styled from 'styled-components';
import * as Realm from 'realm-web';
import { useNavigate } from 'react-router-dom';
import useNavigation from '../../hooks/useNavigation';

// define the schema / rules for the register form validation
const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too short!').required('Required'),
});

// define the schema / rules for the form validation
const registerSchema = Yup.object().shape({
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

// create a type for the values in the login form
type LoginFormValuesType = {
  email: string;
  password: string;
};

type RegisterFormValuesType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const Authentication = () => {
  // state for whether the login or register form should be rendered
  const [isLogin, setIsLogin] = useState<boolean>(true);

  let navigate = useNavigate();
  // get the realm connection from the context
  const { realm } = useRealm();

  const { isDrawOpen, setIsDrawOpen } = useNavigation();

  // initalize a loading state to conditionally render a loading indicator component
  const [loading, setLoading] = useState(false);

  // function that is called upon form submission, tries to login the user in realm
  const handleSubmit = async (values: LoginFormValuesType) => {
    try {
      setLoading(true);

      const credentials = Realm.Credentials.emailPassword(
        values.email,
        values.password
      );

      await realm.logIn(credentials);

      setLoading(false);

      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  // function that is called upon form submission, tries to register the user in realm
  const handleRegister = async (values: RegisterFormValuesType) => {
    try {
      setLoading(true);

      await realm.emailPasswordAuth.registerUser({
        email: values.email,
        password: values.password,
      });

      setLoading(false);

      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <StyledSwitchWrapper>
        <StyledSwitchButton onClick={() => setIsLogin(true)}>
          Login
        </StyledSwitchButton>

        <StyledSwitchButton onClick={() => setIsLogin(false)}>
          Register
        </StyledSwitchButton>
      </StyledSwitchWrapper>

      {isLogin ? (
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <StyledForm>
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

              <StyledButton type="submit">Login</StyledButton>
            </StyledForm>
          )}
        </Formik>
      ) : (
        <>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
            }}
            validationSchema={registerSchema}
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
      )}
    </>
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

const StyledSwitchWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

const StyledSwitchButton = styled.button``;

export default Authentication;
