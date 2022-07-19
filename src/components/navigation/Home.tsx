import useRealm from '../../hooks/useRealm';

const Home = () => {
  const { realm } = useRealm();

  console.log('user:', realm.currentUser);

  return <>Home</>;
};

export default Home;
