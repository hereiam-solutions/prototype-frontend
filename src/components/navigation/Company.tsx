import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useNavigation from '../../hooks/useNavigation';
import Draw from './Draw';
import LogoHereiam from '../../assets/Logo/icon-72x72.png';

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

      {isDrawOpen && <Draw usedInAuthentication={false} />}
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

const StyledCompanyButton = styled(Link)`
  color: ${(props) => props.theme.secondaryFontColor};
`;

const StyledCompanyName = styled.p`
  color: ${(props) => props.theme.primaryFontColor};
  font-size: 1.2rem;

`;

export default Company;
