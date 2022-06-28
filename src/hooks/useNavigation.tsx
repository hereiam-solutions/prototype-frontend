import { useContext } from 'react';
import NavigationContext from '../context/NavigationContext';

// this is a custom hook which allows you to import only itself
// instead of having to import the context and useContext
// whenever you want to access the context's value in a component
const useNavigation = () => {
  return useContext(NavigationContext);
};

export default useNavigation;
