import { useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

function DropdownComp({ options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div>
      <label htmlFor="product-type-dropdown" className="block text-sm font-medium text-gray-700">
        Filter:
      </label>
      <Dropdown onToggle={handleToggle} open={isOpen}>
        <Dropdown.Toggle
          variant="light"
          id="dropdown-basic-button"
          className="flex items-center w-full text-black border border-gray-300 rounded px-3 py-2 " // Added justify-between
        >
          <span className="truncate">{selectedOption || "Product Type"}</span> {/* Display selected or default text */}
          {isOpen ? <RiArrowDropUpLine size={24} /> : <RiArrowDropDownLine size={24} />}
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-full">
          {options.map((option) => (
            <Dropdown.Item
              key={option}
              onClick={() => handleOptionClick(option)} // Use onClick for selection
              className="flex items-center px-4 py-2 hover:bg-gray-100"
            >
              {option}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}


// Example usage:
function MyComponent() {
  const productTypes = ["Electronics", "Clothing", "Books", "Home Goods"];
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    console.log("Selected Type:", type);
  };

  return (
    <div className="p-4"> {/* Added some padding for better visualization */}
      <DropdownComp options={productTypes} onSelect={handleTypeSelect} />
      {selectedType && <p className="mt-2">Selected: {selectedType}</p>}
    </div>
  );
}
DropdownComp.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default MyComponent;