import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import useRealm from "../../hooks/useRealm";
import styled from "styled-components";
import * as Realm from "realm-web";
import { useNavigate } from "react-router-dom";
import { realmFunctionNames } from "../../data/realm/functions";

// define the schema / rules for the register form validation
const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too short!").required("Required"),
});

// define the schema / rules for the form validation
const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too short!").required("Required"),
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

      if (realm.currentUser) {
        await realm.currentUser.refreshCustomData();

        setLoading(false);

        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  // function that is called upon form submission, tries to register the user in realm
  const handleRegister = async (values: RegisterFormValuesType) => {
    try {
      setLoading(true);

      // register the new user
      await realm.emailPasswordAuth.registerUser({
        email: values.email,
        password: values.password,
      });

      // use the same email and password used for registering as credentials for the login
      const credentials = Realm.Credentials.emailPassword(
        values.email,
        values.password
      );

      // log the new user in
      await realm.logIn(credentials);

      if (realm.currentUser) {
        const args = { firstName: values.firstName, lastName: values.lastName };

        await realm.currentUser.callFunction(
          realmFunctionNames.updateCustomData,
          args
        );

        await realm.currentUser.refreshCustomData();

        setLoading(false);

        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <StyledHeader>
        <p>WELCOME</p>
      </StyledHeader>

      {isLogin ? (
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
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

              <StyledButton type="submit">Yes. Log me in</StyledButton>
              <StyledSwitchButton onClick={() => setIsLogin(false)}>
                No account? Sign In.
              </StyledSwitchButton>
            </StyledForm>
          )}
        </Formik>
      ) : (
        <>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={handleRegister}
          >
            {({ errors, touched }) => (
              <StyledForm>
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

                <StyledButton type="submit">Thats me. Sign in</StyledButton>
                <StyledSwitchButton onClick={() => setIsLogin(true)}>
                  I have an account. Let me Log in
                </StyledSwitchButton>
              </StyledForm>
            )}
          </Formik>
        </>
      )}
    </>
  );
};

const StyledForm = styled(Form)`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

const StyledField = styled(Field)`
  background-color: ${(props) => props.theme.formFieldBackground};
  border: 1px solid ${(props) => props.theme.formFieldColor};
  border-radius: ${(props) => props.theme.buttonBorderRadius};
  color: ${(props) => props.theme.formFieldColor};
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 500;
  width: 100%;
  margin-top: 0.6rem;
  padding: 0.75rem 0.75rem;
`;

const StyledInlineErrorMessage = styled.div`
  color: ${(props) => props.theme.alertColor};
  font-weight: 500;
  margin-top: 0.3rem;
`;

const StyledButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  background-color: ${(props) => props.theme.formSubmitFillColor};
  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.buttonBorderRadius};
  text-align: center;
  height: 3rem;
  color: ${(props) => props.theme.formSubmitTextColor};
  font-weight: 500;
`;

const StyledHeader = styled.div`
  width: 80%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
`;

const StyledSwitchButton = styled.button`
  margin-top: 1rem;
`;

export default Authentication;
