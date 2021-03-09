import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Dropdown({ title, dropdownOptions, value, onChange }) {
  // title = The value that will be displayed in default
  // dropdownOptions = List of options and it will be an array
  // value = It is the value that has been selected
  // onChange = Changes the value if the some different value is selected

  const [open, setOpen] = useState(false); // For controlling the opening and closing of the dropdown
  const [query, setQuery] = useState(""); // To hold the searched elements in the input field for searching the option
  const ref = useRef(null); // This is to close the dropdown on pressing outside the dropdown

  useEffect(() => {
    //Mobile devices don't understand touch so for that we are including the "touchend" event.
    // Events for the mobile device
    // touchstart - occurs when the user touches an element
    // touchmove - occurs when the user moves the finger across the screen
    // touchcancel - occurs when the touch is interrupted

    ["click", "touchend"].forEach((e) => {
      // For both click and touchend this will execute

      document.addEventListener(e, toggle); // 'document' is the complete webpage here so anywhere on webpage when clicked the close function will be called
    });

    return () =>
      ["click", "touchend"].forEach((e) => {
        document.removeEventListener(e, toggle);
      });
  }, []);

  function toggle(e) {
    setOpen(e && e.target === ref.current);
  }

  function filter(options) {
    return options.filter(
      (option) => option.toLowerCase().indexOf(query.toLowerCase()) > -1
    ); // Filter
  }

  function displayValue() {
    if (query.length > 0) return query;
    if (value) return value;
    return ""; // If there is no string input then the input field will be blank and the placeholder will be shown
  }

  function selectOption(option) {
    setQuery(""); // Since the option is selected so now we need to empty the query
    onChange(option); // Through this we are setting the value state in the Atendence.js
    setOpen(false); // This is to close the drop down menu
  }

  return (
    <div className={`dropdown ${open ? "active" : null}`}>
      {/* <div className="control" onClick={() => setOpen((prev) => !prev) // We dont to handle input here beacuse it's already handled inside the input}> */}
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
            // onClick={() => setOpen((prev) => !prev)}
            onClick={toggle}
            onTouchEnd={toggle}
          />
        </div>
        <ExpandMoreIcon className={`arrow ${open ? "open" : null}`} onClick={() => setOpen((prev) => !prev)} />
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {filter(dropdownOptions).map((option) => (
          <div
            className={`option ${value === option ? "selected" : null}`}
            onClick={() => selectOption(option)}
            onTouchEnd={() => selectOption(option)} // This is for mobile touch functionality
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
