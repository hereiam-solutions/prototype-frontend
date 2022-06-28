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
  if (error) {
    console.log('error');
  }
  if (data) {
    console.log(data);
  }

  return (
    <Wrapper>
      <Pre>{JSON.stringify(realm.currentUser, null, 2)}</Pre>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 70px 70px 0 0;
`;
const Pre = styled.pre`
  border-radius: 70px 70px 0 0;
  background: white;
`;

export default UserDetails;
