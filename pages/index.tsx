import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components';

const Home = () => {
  return <StyledExample>
  
  <>
    <Head>
      <title>hereIam - saving lives with better decisions</title>
    </Head>
    <h1>INTRO</h1>
    <h2>
      <Link href='/'>Go to Home</Link>
    </h2>
    <h2>
      <Link href='/profile'>Go to route /profile</Link>
    </h2>
    <h2>
      <Link href='/settings'>Go to route /settings</Link>
    </h2>
    <h2>
      <Link href='/about'>Go to route /about</Link>
    </h2>
  </>
  
  </StyledExample>;
};

export default Home;

const StyledExample = styled.div`
  color: red;
`;
