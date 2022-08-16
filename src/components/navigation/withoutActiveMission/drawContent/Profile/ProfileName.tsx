import React from "react";
import styled from "styled-components";
import Avatar from "../../../../../assets/avatar.jpg";

const ProfileName = () => {
  return (
    <StyledNameWrapper>
      <StyledAvatar
        style={{
          backgroundImage: `url(${Avatar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></StyledAvatar>

      {/* central edit */}
      {/* <RiEditBoxFill size={25} /> */}

      <StyledName>
        {/*firstName*/} {/* + */} {/*lastName*/}
        Ben Tester
      </StyledName>
      <StyledTeam>
        {/*teamName?*/}
        {/*<span> , */} {/*countryName?*/} {/*</span>>*/}
        CNEC<span> , Romania</span>
      </StyledTeam>

      <StyledStatus>
        {/* status? */}
        Mission ready
      </StyledStatus>
    </StyledNameWrapper>
  );
};

const StyledStatus = styled.div`
  width: 35vw;
  margin-top: 1rem;

  padding: ${(props) => props.theme.insideButtonPadding};
  font-size: 1rem;
  font-weight: 500;
  text-align: center;

  background-color: ${(props) => props.theme.readyColor};
  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.primaryBorderRadius};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledAvatar = styled.div`
  width: 30%;
  min-height: 100px;
  margin-top: -9vh;

  self-align: center;
  z-index: 7;

  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.buttonBorderRadius};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledName = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
`;

const StyledTeam = styled.div`
  font-size: 1.3rem;
  font-weight: 600;

  span {
    font-size: 1rem;
  }
`;

const StyledNameWrapper = styled.div`
  margin: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  pointer-events: auto;
`;

export default ProfileName;
