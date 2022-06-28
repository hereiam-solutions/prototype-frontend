import React, { useEffect } from 'react';
import useRealm from '../../hooks/useRealm';

type Props = {};

const Home = (props: Props) => {
  const { realm } = useRealm();
  console.log('user:', realm.currentUser);

  useEffect(() => {
    console.log('hommmeeee');
  }, []);

  return <>hello</>;
};

export default Home;
