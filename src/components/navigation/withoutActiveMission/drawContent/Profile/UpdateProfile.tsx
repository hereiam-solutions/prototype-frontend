import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import useNavigation from "../../../../../hooks/useNavigation";

import useRealm from "../../../../../hooks/useRealm";
import { realmFunctionNames } from "../../../../../data/realm/functions";

import useModal from "../../../../../hooks/useModal";

// type / enum imports
import {
    UpdatePersonArgs,
    PersonSchema,
} from "../../../../../data/realm/schema/person";

const UpdateProfile = () => {

    const { realm } = useRealm();
    const { setIsDrawOpen } = useNavigation();
    const navigate = useNavigate();
    const { setIsModalActive, setModalContent } = useModal();

    const handleProfileSubmit = async () => {

        // paste args 
        const UpdatePersonArgs = {
            bio: bioValue,
        };

        // call the Realm function
        if (realm.currentUser) {

            await realm.currentUser.refreshCustomData();

            await realm.currentUser.callFunction(
                realmFunctionNames.updateCustomData,
                UpdatePersonArgs
            );

            await realm.currentUser.refreshCustomData();

            //Modal output
            setModalContent("Profile created");

            setTimeout(() => {
                setIsModalActive(false);
            }, 5000);

            setIsModalActive(true);
        }

        setIsDrawOpen(false);
        navigate("/profile");
    };


    // bio
    const [bioValue, setBioValue] = useState<string>("");

    const handleBioChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setBioValue(event.currentTarget.value);
    };

    return (
        <StyledProfileContent>
            <StyledSectionWrapper>
                <StyledSecondaryHeading>Bio</StyledSecondaryHeading>
                <StyledInput
                    type="string"
                    value={bioValue}
                    onChange={handleBioChange}
                />
            </StyledSectionWrapper>
            <StyledButton onClick={handleProfileSubmit}>
                {"Submit"}
            </StyledButton>
        </StyledProfileContent>
    );

};

const StyledDrawHeader = styled.div`
  padding-bottom: 1rem;
  /* margin-bottom: 0.8rem; */

  width: 100vw;

  display: flex;
  flex-direction: raw;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font-size: 1.6rem;
  font-weight: 500;
`;

const StyledButton = styled.button`
  min-width: 30vw;
  height: 3rem;

  margin-top: 1.5rem;
  margin-bottom: 4rem;

  font-weight: 700;
  text-align: center;

  align-self: center;

  color: ${(props) => props.theme.buttonFontColor};
  background-color: ${(props) => props.theme.buttonColor};

  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};
`;

const StyledProfileWrapper = styled.div`
  position: absolute;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  pointer-events: auto;
`;

const StyledProfileContent = styled.div`
  height: 55vh;
  padding: 0.5rem;

  background: ${(props) => props.theme.primaryBackgroundColor};

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  overflow-x: hidden;
  overflow-y: scroll;
`;

const StyledSectionWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const StyledSecondaryHeading = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  color: ${(props) => props.theme.primaryFontColor};
`;

const StyledInput = styled.input`
  background-color: ${(props) => props.theme.primaryBackgroundColor};
  color: ${(props) => props.theme.formFieldColor};

  border: 1px solid ${(props) => props.theme.formFieldColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};

  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 500;

  width: 100%;
  /* margin-top: 0.6rem; */
  padding: 0.75rem;
`;

export default UpdateProfile;
