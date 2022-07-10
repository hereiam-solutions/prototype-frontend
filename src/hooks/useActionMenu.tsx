import { useContext } from 'react';
import ActionMenuContext from '../context/ActionMenuContext';

// this is a custom hook which allows you to import only itself
// instead of having to import the context and useContext
// whenever you want to access the context's value in a component
const useActionMenu = () => {
  return useContext(ActionMenuContext);
};

export default useActionMenu;
