import React, { useState } from "react";

const FilterComponent = ({ options, onFilter }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
    onFilter(selectedOptions);
  };

  return (
    <div>
      <h3>Filters</h3>
      {options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            checked={selectedOptions.includes(option)}
            onChange={() => handleOptionChange(option)}
          />
          {option}
        </div>
      ))}
    </div>
  );
};

export default FilterComponent;
