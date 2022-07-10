import { useContext } from 'react';
import MissionContext from '../context/MissionContext';

// this is a custom hook which allows you to import only itself
// instead of having to import the context and useContext
// whenever you want to access the context's value in a component
const useMission = () => {
  return useContext(MissionContext);
};

export default useMission;
