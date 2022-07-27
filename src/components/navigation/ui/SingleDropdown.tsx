import styled from "styled-components";

type SingleDropdownProps = {
  label: string;
  value: string;
  options: {
    label: string;
    value: string;
  }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SingleDropdown = ({
  label,
  value,
  options,
  onChange,
}: SingleDropdownProps) => {
  return (
    <>
      <label>
        {label}
        <StyledSelect onChange={onChange} value={value}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      </label>
      {/* {value && <div>{value}</div>} */}
    </>
  );
};

const StyledSelect = styled.select`
  background-color: ${(props) => props.theme.primaryBackgroundColor};
  border: 1px solid ${(props) => props.theme.formFieldColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};
  color: ${(props) => props.theme.formFieldColor};
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 500;
  width: 100%;
  /* margin-top: 0.6rem; */
  padding: 0.75rem;
  outline: none;
`;

export default SingleDropdown;
