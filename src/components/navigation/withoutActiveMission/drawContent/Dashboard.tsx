import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <Link to="/mission">Join Mission</Link>
    </>
  );
};

export default Dashboard;
