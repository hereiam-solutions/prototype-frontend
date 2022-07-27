import styled from "styled-components";

type CardType = {
  hazard: string;
  region: string;
  role: string;
  from: string;
  to: string;
};

export const Card = ({ hazard, region, role, from, to }: CardType) => {
  return (
    <CardWrapper>
      <CardTop>
        <CardTextHazard>{hazard}</CardTextHazard>

        <CardTextRegion>{region}</CardTextRegion>

        <CardTextRole>{role}</CardTextRole>

        <CardStats>
          <small>
            {from} <br />
            to
            <br /> {to}
          </small>
        </CardStats>
      </CardTop>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  margin-top: 1rem;
  min-width: 33vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: justify-between;

  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.primaryBorderRadius};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const CardTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardTextHazard = styled.div`
  width: 100%;

  background-color: ${(props) => props.theme.buttonColor};
  color: ${(props) => props.theme.buttonFontColor};

  text-align: center;
  font-size: 1rem;
  font-weight: 500;

  border-radius: ${(props) => props.theme.primaryBorderRadius}
    ${(props) => props.theme.primaryBorderRadius} 0 0;
`;

const CardTextRegion = styled.div`
  width: 100%;
  padding: 0.5rem;

  background-color: ${(props) => props.theme.primaryBackgroundColor};
  color: ${(props) => props.theme.primaryFontColor};

  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.3rem;

  border-radius: 0 0 ${(props) => props.theme.primaryBorderRadius}
    ${(props) => props.theme.primaryBorderRadius};
`;

const CardTextRole = styled.div`
  width: 100%;
  padding: 1rem;

  text-align: center;
  font-size: 1rem;
  font-weight: 400;
`;

const CardStats = styled.div`
  width: 33vw;
  padding: 1rem;
  heigth: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  text-align: center;
  font-size: 0.8rem;
  font-weigth: 300;
  line-heigth: 1.2rem;

  border-top: 1px solid ${(props) => props.theme.sectionHeadlineBackgroundColor};
  border-radius: ${(props) => props.theme.primaryBorderRadius}
    ${(props) => props.theme.primaryBorderRadius} 0 0;
`;
