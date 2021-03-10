import React, { useState, useRef, useEffect } from "react";
import "./Style/Dropdown.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Dropdown({ title, dropdownOptions, value, onChange }) {
  // title = The value that will be displayed in default
  // dropdownOptions = List of options and it will be an array

  const [open, setOpen] = useState(false); // For controlling the opening and closing of the dropdown
  const [query, setQuery] = useState(""); // To hold the searched elements in the input field for searching the option
  const ref = useRef(null); // This is to close the dropdown on pressing outside the dropdown

  useEffect(() => {
    ["click", "touchend"].forEach((e) => {
      // For both click and touchend this will execute
      document.addEventListener(e, toggle);
    });

    return () =>
      ["click", "touchend"].forEach((e) => {
        document.removeEventListener(e, toggle);
      });
  }, []);

  function toggle(e) {
    // Changes the status of "open" state
    setOpen(e && e.target === ref.current);
  }

  // Filters all the contents with the help of query which is entered in the input field
  function filter(options) {
    return options.filter(
      (option) => option.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  function displayValue() {
    if (query.length > 0) return query;
    if (value) return value;
    return ""; // If there is no string input then the input field will be blank and the placeholder will be shown
  }

  function selectOption(option) {
    setQuery(""); // Emptying the query after the option is selected from dropdown
    onChange(option); // Setting the value state in the Atendence.js
    setOpen(false); // Close the drop down menu after selection of option from dropdown
  }

  return (
    <div className={`dropdown ${open ? "active" : null}`}>
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value">
          <input
            type="text"
            ref={ref}
            placeholder={value ? value : title}
            value={displayValue()}
            onChange={(event) => {
              setQuery(event.target.value); //Setting the query with every character entered in the input field
              onChange(null);
            }}
            onClick={toggle}
            onTouchEnd={toggle}
          />
        </div>
        <ExpandMoreIcon
          className={`arrow ${open ? "open" : null}`}
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {filter(dropdownOptions).map((option) => (
          <div
            className={`option ${value === option ? "selected" : null}`}
            onClick={() => selectOption(option)}
            onTouchEnd={() => selectOption(option)} // For mobile touch functionality
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
