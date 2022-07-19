import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useNavigation from '../../hooks/useNavigation';
import LogoHereiam from '../../assets/Logo/light/hereIam_logo_light96x96.svg';
function Company() {
  const { isDrawOpen, setIsDrawOpen } = useNavigation();

  return (
    <>
      <StyledCompanyMenu role="navigation">
        <StyledCompanyButton onClick={() => setIsDrawOpen(true)} to="about">
          <img src={LogoHereiam} alt="hereIam Logo" />
        </StyledCompanyButton>
        <div>
          <StyledCompanyName>hereIam</StyledCompanyName>
        </div>
      </StyledCompanyMenu>
    </>
  );
}

const StyledCompanyMenu = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  bottom: 5%;
  left: 8%;
  z-index: 2;
  pointer-events: auto;
`;

const StyledCompanyButton = styled(Link)``;

const StyledCompanyName = styled.p`
  color: var(--base-light);
  font-size: 1.2rem;
  margin-top: -0.5rem;
`;

export default Company;
