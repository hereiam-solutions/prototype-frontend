import React from 'react';
import useCreateMarker from '../../../hooks/useCreateMarker';

type CreateMapMarkerProps = {
  type: 'hazard' | 'casualty' | 'boo';
};

const CreateMapMarker = ({ type }: CreateMapMarkerProps) => {
  const { location, setLocation } = useCreateMarker();
  return <div>CreateMapMarker</div>;
};

export default CreateMapMarker;
