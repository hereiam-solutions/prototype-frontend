import { useRouter } from 'next/router';
import styled from 'styled-components';

const Home = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <StyledExample>
      The route you visited has the parameter:{' '}
      <StyledNumber>{pid}</StyledNumber>!
    </StyledExample>
  );
};

export default Home;

const StyledExample = styled.div`
  color: green;
`;

const StyledNumber = styled.span`
  color: red;
`;
