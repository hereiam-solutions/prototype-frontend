import React from "react";
import useRealm from '../../../../../hooks/useRealm';
import styled from 'styled-components';
import Avatar from '../../../../../assets/avatar.jpg';
import { RiEditBoxFill } from "react-icons/ri";

const ProfileName = () => {

  return (
    <StyledNameWrapper>

      <StyledAvatar

        style={{ 
          backgroundImage: `url(${Avatar})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }} 
      
      >
      </StyledAvatar>

      {/* central edit */}
      <RiEditBoxFill size={25} />


      <StyledName>
        {/*firstName*/} {/* + */} {/*lastName*/}
        Ben Tester
      </StyledName>
      <StyledTeam>
        {/*teamName?*/}{/*<span> , */} {/*countryName?*/} {/*</span>>*/}
        CNEC<span> , Romania</span>
      </StyledTeam>

    </StyledNameWrapper>
  );
};

const StyledAvatar = styled.div`
  width: 30%;
  min-height: 100px;
  margin-top: -10vh;

  self-align: center;
  z-index: 7;

  border-radius: ${(props) => props.theme.buttonBorderRadius};
  
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