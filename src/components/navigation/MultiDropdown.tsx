// example in parent component
// const [selectedDisasterTypes, setSelectedDisasterTypes] = useState<string[]>([
//     disasterTypesEnum.DROUGHT,
//   ]);

//   const handleDisasterTypesChange = (
//     e: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     const selectedOptions = e.currentTarget.selectedOptions;
//     const newStateValue: string[] = [];

//     for (let i = 0; i < selectedOptions.length; i++) {
//       console.log(i, selectedOptions[i].value);
//       newStateValue.push(selectedOptions[i].value);
//     }

//     setSelectedDisasterTypes(newStateValue);
//   };

type MultiDropdownProps = {
  label: string;
  values: string[];
  options: {
    label: string;
    value: string;
  }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const MultiDropdown = ({
  label,
  values,
  options,
  onChange,
}: MultiDropdownProps) => {
  return (
    <>
      <label>
        {label}
        <select placeholder="HI" value={values} onChange={onChange} multiple>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      {values && values.map((value) => <div key={value}>{value}</div>)}
    </>
  );
};

export default MultiDropdown;
