import React from 'react';

type CreateMapMarkerProps = {
  type: 'hazard' | 'casualty' | 'boo';
};

const CreateMapMarker = ({ type }: CreateMapMarkerProps) => {
  return <div>CreateMapMarker</div>;
};

export default CreateMapMarker;
