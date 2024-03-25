import React, { useState, useEffect } from "react";
import "../styles/Dropdown.css";

const Dropdown = ({ options, customSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const closeDropdowns = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", closeDropdowns);

    return () => {
      document.removeEventListener("click", closeDropdowns);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = async (e) => {
    setSearchTerm(e.target.value);
    if (customSearch) {
      const filteredOptions = await customSearch(e.target.value);
      setFilteredOptions(filteredOptions);
    } else {
      const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredOptions(filteredOptions);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="dropdown">
      <div className={isOpen ? "toggleBtn open" : "toggleBtn"}>
        <button className={isOpen ? "open" : ""} onClick={toggleDropdown}>
          {selectedOption || "Оберіть ваше місто"}
        </button>
        <div className="arrow-down"></div>
      </div>
      {isOpen && (
        <div className="options">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          <ul>
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                style={{
                  backgroundColor:
                    selectedOption === option ? "grey" : "transparent",
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
