import { useContext } from "react";
import MissionMapContext from "../context/MissionMapContext";

// this is a custom hook which allows you to import only itself
// instead of having to import the context and useContext
// whenever you want to access the context's value in a component
const useMissionMap = () => {
  return useContext(MissionMapContext);
};

export default useMissionMap;
