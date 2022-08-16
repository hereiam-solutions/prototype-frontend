import React from "react";
import styled from "styled-components";

import {
  RiCarFill,
  RiBus2Fill,
  RiMotorbikeFill,
  RiShip2Fill,
} from "react-icons/ri";

const HasCarLicense = RiCarFill;
const HasBusLicense = RiBus2Fill;
const HasBikeLicense = RiMotorbikeFill;
const HasBoatLicense = RiShip2Fill;

const DriverLicenses = () => {
  return (
    <StyledLicensesWrapper>
      <p>Driving licenses</p>
      <ul>
        <li>
          <HasCarLicense size={15} />
        </li>
        <li>
          <HasBusLicense size={15} />
        </li>
        <li>
          <HasBikeLicense size={15} />
        </li>
        <li className="false">
          <HasBoatLicense size={15} />
        </li>
      </ul>
      {/* <EditLicense size={15}/> */}
    </StyledLicensesWrapper>
  );
};

const StyledLicensesWrapper = styled.div`
  margin-top: 2rem;
  width: 90vw;
  padding: 0 1rem;

  display: flex;
  flex-direction: raw;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  font-size: 1.2rem;
  font-weight: 200;

  pointer-events: auto;

  ul {
    list-style: none;

    display: flex;
    flex-direction: raw;
    align-items: center;
    justify-content: center;
  }

  li {
    width: 2rem;
  }

  .false {
    opacity: 0.5;
  }
`;

export default DriverLicenses;
