import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useNavigation from '../../../../hooks/useNavigation';

type Props = {};

const ActiveDashboard = (props: Props) => {
  const { setIsDrawOpen } = useNavigation();

  return (
    <>
      <StyledLink onClick={() => setIsDrawOpen(false)} to="/">
        Leave Mission
      </StyledLink>
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primaryFontColor};
`;

export default ActiveDashboard;
