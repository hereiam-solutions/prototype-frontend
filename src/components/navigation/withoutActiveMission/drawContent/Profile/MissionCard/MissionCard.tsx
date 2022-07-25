import { CardType } from "./CardTypes";
import styled from "styled-components";

export const Card = ({ hazard, region, role, from, to}: CardType) => {
    return (
      
        <CardWrapper>

          <CardTextWrapper>
            <CardTextDateFrom>{from}</CardTextDateFrom>
            <CardTextDateTo>{to}</CardTextDateTo>
            <CardTextHazard>{hazard}</CardTextHazard>
            <CardTextRegion>{region}</CardTextRegion>
            <CardTextRole>{region}</CardTextRole>
          </CardTextWrapper>

          <CardStatWrapper>
            {/* <CardStats>
              <div>
                1<sup>m</sup>
              </div>
              <div>read</div>
            </CardStats> */}
            <CardStats>
              <LinkText href="#">website</LinkText>
            </CardStats>
            <CardStats>
              <LinkText href="#">github</LinkText>
            </CardStats>
          </CardStatWrapper>

        </CardWrapper>
      
    );
  };


const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

const CardHazardLogo = styled.div<{ background: string }>`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

const CardTextDateFrom = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;

const CardTextDateTo = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;

const CardTextHazard = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  
`;

const CardTextRegion = styled.h3`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  
`;

const CardTextRole = styled.h3`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  
`;

const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #5930e5;
`;

const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
`;

const LinkText = styled.a`
  color: #fff;
  text-decoration: none;
`;