import React, { useState, useEffect, useRef } from "react";
import useRealm from '../../../../../hooks/useRealm';
import styled from 'styled-components';
import { RiEditBoxFill } from "react-icons/ri";

const Bio = () => {

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // The value of the textarea
  const [value, setValue] = useState<String>();

  // This function is triggered when textarea changes
  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);

  return (
    <StyledBioWrapper>

      <SectionHeadline>
        Bio
      </SectionHeadline>

      {/* new input bio 
      <textarea
        ref={textareaRef}
        style={styles.textareaDefaultStyle}
        onChange={textAreaChange}
        placeholder={"Placeholdertext"}
      >
        {value}
      </textarea>
      */}

      <StyledBio>
        <p>
        I am Ben from Bucharest, Romania. After more than ten years working as a volunteer for several organizations, 
        I have turned my commitment into a profession. For the past five years, I have been supporting the operations 
        of fire departments and civil protection in the south of the country through my expertise in managing and organizing operations. 
        I have been able to gain international experience in three foreign assignments so far. 
        I have a small family with one child and live on the outskirts of our capital.
        </p>
        {/* central edit */}
      <RiEditBoxFill size={25} />
      </StyledBio>

    </StyledBioWrapper>
  );
};

const styles: { [name: string]: React.CSSProperties } = {
  container: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textareaDefaultStyle: {
    padding: 10,
    
    display: "block",
    resize: "none",
    backgroundColor: "var(--gray-200)",
    
  },
};

const StyledBio = styled.div`
  padding: 1rem;
  font-size: 0.8rem;
`;


const StyledBioWrapper = styled.div`
  margin: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  pointer-events: auto;

  textarea {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    width: 100%;
  }
`;

const SectionHeadline = styled.div`
  width: 100%;
  margin-top: 1rem;

  padding: ${(props) => props.theme.sectionHeadlinePadding};

  border-radius: ${(props) => props.theme.buttonBorderRadius} ${(props) => props.theme.buttonBorderRadius} 0 0;

  background-color: ${(props) => props.theme.sectionHeadlineBackgroundColor};
  color: ${(props) => props.theme.sectionHeadlineColor};

`;

export default Bio;