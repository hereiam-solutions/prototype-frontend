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
        <select onChange={onChange} value={value}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      {value && <div>{value}</div>}
    </>
  );
};

export default SingleDropdown;
