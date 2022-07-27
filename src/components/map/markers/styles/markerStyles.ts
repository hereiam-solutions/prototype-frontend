import styled from "styled-components";

export const StyledPopupContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.3rem;
`;

export const StyledPopupHeading = styled.div`
  align-self: center;
  font-size: 1.1rem;
  font-weight: 700;
`;

export const StyledDate = styled.div`
  align-self: center;
`;

export const StyledSection = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBoldText = styled.span`
  font-weight: 600;
`;

export const StyledText = styled.span``;

export const StyledDeactivateButton = styled.button`
  align-self: center;

  margin-top: 0.3rem;

  border-radius: 10px;
  padding: 0.2rem 0.3rem;

  background: #eb5257;
  color: white;
`;

export const StyledActivateButton = styled.button`
  align-self: center;

  margin-top: 0.3rem;

  border-radius: 10px;
  padding: 0.2rem 0.3rem;

  background: #41ba4f;
  color: white;
`;
