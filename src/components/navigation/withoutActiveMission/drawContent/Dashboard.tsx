import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useNavigation from '../../../../hooks/useNavigation';

type Props = {};

const Dashboard = (props: Props) => {
  const { setIsDrawOpen } = useNavigation();
  return (
    <>
      <StyledLink onClick={() => setIsDrawOpen(false)} to="/mission">
        Join Mission
      </StyledLink>
    </>
  );
};

const StyledLink = styled(Link)`
  color: white;
`;

export default Dashboard;
