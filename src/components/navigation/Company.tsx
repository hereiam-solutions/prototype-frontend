import { Link } from "react-router-dom";
import styled from "styled-components";
import useNavigation from "../../hooks/useNavigation";
import LightLogo from "../../assets/Logo/light/hereIam_logo_light96x96.svg";

function Company() {
  const { isDrawOpen, setIsDrawOpen } = useNavigation();
  return (
    <>
      <StyledCompanyMenu role="navigation">
        <StyledCompanyButton onClick={() => setIsDrawOpen(true)} to="about">
          <img src={LightLogo} width="30px" alt="hereIam Logo" />
          <StyledCompanyName>hereIam</StyledCompanyName>
        </StyledCompanyButton>
      </StyledCompanyMenu>
    </>
  );
}

const StyledCompanyMenu = styled.div`
  width: auto;
  height: auto;
  padding: 0.7rem;

  position: absolute;
  bottom: 1.5%;
  left: 4%;
  z-index: 2;

  pointer-events: auto;

  background-color: rgba(73, 68, 64, 0.5);
  border-radius: 50px;
`;

const StyledCompanyButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const StyledCompanyName = styled.p`
  color: white;
  font-size: 1rem;
  margin-top: 0.2rem;
`;

export default Company;
