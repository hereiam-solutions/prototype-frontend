import { useContext } from 'react';
import RealmContext from '../context/RealmContext';

// this is a custom hook which allows you to import only itself
// instead of having to import the context and useContext
// whenever you want to access the context's value in a component
const useRealm = () => {
  return useContext(RealmContext);
};

export default useRealm;
