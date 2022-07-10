import { Navigate, useLocation } from 'react-router-dom';
import useMission from '../../hooks/useMission';
import useRealm from '../../hooks/useRealm';

const RequireActiveMission = ({ children }: { children: JSX.Element }) => {
  // check if mission context has data, else reroute to /
  const { activeMission } = useMission();

  console.log(activeMission);

  let location = useLocation();

  if (!activeMission) {
    // redirect the user to the / route as they are currently not participating in a mission
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireActiveMission;
