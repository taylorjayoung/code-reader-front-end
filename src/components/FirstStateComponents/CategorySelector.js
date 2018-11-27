import React from 'react';
import Select from 'react-select';


const categoryValues = [
  { label: "Context Based Solving", value: 1 },
  { label: "Guessing Output", value: 2 },
  { label: "Debugging", value: 3 },
  { label: "Syntax", value: 4},
  { label: "Execution Contexts", value: 5},
  { label: "Breakpoints", value: 6},
  { label: "Efficiency Improvements", value: 7},
  { label: "Server Side", value: 8},
];

export default (props) => (
  <Select
    closeMenuOnSelect={false}
    isMulti
    options={categoryValues}
    onChange={(category) => props.selector(category)}
  />
);
