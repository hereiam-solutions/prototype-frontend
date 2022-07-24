import React, { useState, useEffect, useRef } from "react";
import useRealm from '../../../../../hooks/useRealm';
import styled from 'styled-components';

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

      <textarea
        ref={textareaRef}
        style={styles.textareaDefaultStyle}
        onChange={textAreaChange}
        placeholder={"Placeholdertext"}
      >
        {value}
      </textarea>

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

  background-color: ${(props) => props.theme.sectionHeadlineBackgroundColor};
  color: ${(props) => props.theme.sectionHeadlineColor};

`;

export default Bio;