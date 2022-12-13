import { useState } from "react";

// type imports
import { signalTypes } from "../../../../map/mapTypes";
import { realmFunctionNames } from "../../../../../data/realm/functions";
import { CreateSignalArgs } from "../../../../../data/realm/schema/signal";

// hook imports
import useNavigation from "../../../../../hooks/useNavigation";
import useCreateMarker from "../../../../../hooks/useCreateMarker";
import useMission from "../../../../../hooks/useMission";
import useRealm from "../../../../../hooks/useRealm";
import useMissionMap from "../../../../../hooks/useMissionMap";

import SingleDropdown from "../../../ui/SingleDropdown";

import { useTranslation } from 'react-i18next';

import styled from "styled-components";

const CreateSignalMarker = () => {
  const { realm } = useRealm();
  const { createMarkerLocation: location } = useCreateMarker();
  const { activeMission } = useMission();
  const { setIsDrawOpen } = useNavigation();
  const { reRenderBoolean, setReRenderBoolean } = useMissionMap();

  const [loading, setLoading] = useState<boolean>(false);
  
  const handleSubmit = async () => {
    try {
      if (activeMission) {
        const args: CreateSignalArgs = {
          identifier: identifierValue,
          mission: activeMission._id.toString(),
          signal_type: selectedSignalType,
          status: "active",
          geoJSON: { type: "Point", coordinates: location },
        };

        setLoading(true);

        if (realm.currentUser) {
          // call the Realm function
          await realm.currentUser.callFunction(
            realmFunctionNames.createSignal,
            args
          );
        }

        setLoading(false);
        setReRenderBoolean(!reRenderBoolean);
        setIsDrawOpen(false);
      }
    } catch (e) {
      console.log(
        "There has been an error while calling the Realm custom function called:",
        realmFunctionNames.createSignal,
        "Error:",
        e
      );
    }
  };

  // signalrtype
  const [selectedSignalType, setSelectedSignalType] = useState<string>(
    signalTypes.DOG
  );

  const handleSignalTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSignalType(e.currentTarget.value);
  };

  const [identifierValue, setIdentifierValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdentifierValue(event.currentTarget.value);
  };

  const { t } = useTranslation();

  return (
    <StyledDrawWrapper>
      <StyledDrawHeader>
        <StyledHeading>{t("Signal.headline")}</StyledHeading>
      </StyledDrawHeader>

      <StyledContentWrapper>
        <StyledSectionWrapper>
          <StyledSecondaryHeading>{t("Signal.type")}</StyledSecondaryHeading>
          <StyledHint>{t("Signal.typehint")}</StyledHint>
          <SingleDropdown
            options={SignalDropdownOptions}
            value={selectedSignalType}
            label={""}
            onChange={handleSignalTypeChange}
          />
          
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>{t("Signal.desc")}</StyledSecondaryHeading>
          <StyledHint>{t("Signal.deschint")}</StyledHint>
          <StyledInput
            placeholder="..."
            onChange={handleInputChange}
            type="text"
            value={identifierValue}
          />
        </StyledSectionWrapper>

        <StyledButton onClick={handleSubmit}>
          {t(loading ? "loading..." : "Submit Signal")}
        </StyledButton>
      </StyledContentWrapper>
    </StyledDrawWrapper>
  );
};

const StyledDrawWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${(props) => props.theme.primaryBackgroundColor};
`;

const StyledDrawHeader = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 0.8rem;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  color: ${(props) => props.theme.primaryFontColor};
`;

const StyledContentWrapper = styled.div`
  /* padding-top: 8rem; */
  width: 100%;
  background: ${(props) => props.theme.primaryBackgroundColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;

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

// styled components for this component only
const StyledInput = styled.input`
  width: 100%;
  /* margin-top: 0.6rem; */
  padding: 0.75rem;

  background-color: ${(props) => props.theme.primaryBackgroundColor};
  color: ${(props) => props.theme.formFieldColor};

  border: 1px solid ${(props) => props.theme.formFieldColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};
  
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 500;
  
`;

const StyledButton = styled.button`
  width: 60%;
  height: 3rem;

  margin-top: 0.5rem;

  font-weight: 700;
  text-align: center;

  align-self: center;

  color: ${(props) => props.theme.buttonFontColor};
  background-color: ${(props) => props.theme.buttonColor};

  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};
`;


const StyledHint = styled.div`
margin-top: -0.4rem;

font-size: 0.8rem;
font-weight: 300;
`;

const SignalDropdownOptions = [
  { label: signalTypes.DOG, value: signalTypes.DOG },
  { label: signalTypes.DRONE, value: signalTypes.DRONE },
  { label: signalTypes.SENSOR, value: signalTypes.SENSOR },
  { label: signalTypes.VOST, value: signalTypes.VOST },
  { label: signalTypes.LOCALS, value: signalTypes.LOCALS },
  { label: signalTypes.LEMA, value: signalTypes.LEMA },
];

export default CreateSignalMarker;
