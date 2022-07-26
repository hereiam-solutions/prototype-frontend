import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import useRealm from "../../hooks/useRealm";
import styled from "styled-components";
import * as Realm from "realm-web";
import { useNavigate } from "react-router-dom";
import { realmFunctionNames } from "../../data/realm/functions";
import useTheme from "../../hooks/useTheme";
import { ThemeEnum } from "../../context/ThemeContext";

import DarkLogo from "../../assets/Logo/dark/hereIam_logo_dark256x256.svg";
import LightLogo from "../../assets/Logo/light/hereIam_logo_light256x256.svg";
import useMission from "../../hooks/useMission";
import { MissionSchema } from "../../data/realm/schema/mission";
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
  const { currentTheme } = useTheme();
  // state for whether the login or register form should be rendered
  const [isLogin, setIsLogin] = useState<boolean>(true);

  let navigate = useNavigate();
  // get the realm connection from the context
  const { realm } = useRealm();
  const { setActiveMission } = useMission();

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
        console.log("hi");
        await realm.currentUser.refreshCustomData();

        const response: MissionSchema = await realm.currentUser.callFunction(
          realmFunctionNames.getCurrentMission,
          {}
        );

        if (response._id) {
          console.log("got mission");
          await realm.currentUser.refreshCustomData();

          setActiveMission(response as MissionSchema);

          navigate("/mission");
        } else {
          navigate("/");
        }

        setLoading(false);
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
    <StyledDrawWrapper>
      <StyledLogoWrapper>
        <StyledLogo
          src={currentTheme === ThemeEnum.LIGHT ? DarkLogo : LightLogo}
        />
        <StyledCompanyName>HEREIAM</StyledCompanyName>
      </StyledLogoWrapper>

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

              <StyledButton type="submit">Log In</StyledButton>
              <StyledSwitchButton onClick={() => setIsLogin(false)}>
                No account? Register.
              </StyledSwitchButton>
            </StyledForm>
          )}
        </Formik>
      ) : (
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

              <StyledButton type="submit">Register</StyledButton>
              <StyledSwitchButton onClick={() => setIsLogin(true)}>
                Already have an account? Log In.
              </StyledSwitchButton>
            </StyledForm>
          )}
        </Formik>
      )}
      <StyledBottomSpacer />
    </StyledDrawWrapper>
  );
};

const StyledDrawWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  /* overflow-y: scroll */
`;

const StyledLogoWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled.img`
  height: 12vh;
  width: 12vh;
`;

const StyledCompanyName = styled.p`
  font-weight: 600;
  font-size: 2rem;
`;

const StyledForm = styled(Form)`
  /* width: 90%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  gap: 0.5rem;
`;

const StyledField = styled(Field)`
  background-color: ${(props) => props.theme.primaryBackgroundColor};
  border: 1px solid ${(props) => props.theme.formFieldColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};
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
  width: 60%;
  height: 3rem;

  margin-top: 1.5rem;

  font-weight: 700;
  text-align: center;

  color: ${(props) => props.theme.primaryBackgroundColor};
  background-color: ${(props) => props.theme.buttonColor};

  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};
`;

const StyledBottomSpacer = styled.div`
  height: 50vh;
`;

const StyledSwitchButton = styled.button`
  margin-top: 1rem;
`;

export default Authentication;
