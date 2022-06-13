import Head from 'next/head';
import styled from 'styled-components';

const Home = () => {
  return <StyledExample>
  
    <Head>
      <title>hereIam - saving lives with better decisions</title>
    </Head>
    <h1>INTRO</h1>
  
  </StyledExample>
};

export default Home;

const StyledExample = styled.div`
  color: red;
`;
