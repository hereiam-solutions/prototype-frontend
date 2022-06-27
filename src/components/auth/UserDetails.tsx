import styled from 'styled-components';
import useRealm from '../../hooks/useRealm';
import useRealmFunction from '../../hooks/useRealmFunction';

const UserDetails = () => {
  const { realm } = useRealm();

  const { data, loading, error } = useRealmFunction({
    functionName: 'testFunction',
    args: [],
  });

  if (loading) {
    console.log('loading');
  }
  if (data) {
    console.log(data);
  }

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
