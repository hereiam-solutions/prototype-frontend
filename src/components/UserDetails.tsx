import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';
import useRealm from '../hooks/useRealm';
import * as Realm from 'realm-web';

const UserDetails = () => {
  const { realm } = useRealm();

  return (
    <>
      <Pre>{JSON.stringify(realm.currentUser, null, 2)}</Pre>
    </>
  );
};

const Pre = styled.pre`
  color: black;
`;

export default UserDetails;
