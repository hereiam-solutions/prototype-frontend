import styled from 'styled-components';
import useRealm from '../hooks/useRealm';

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
