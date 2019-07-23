import React from "react";

const NameFilter = ({ changeValue = () => {} }) => (
  <div className="name-filter">
    <input
      onChange={e => changeValue(e.target.value)}
      className="name-filter-text"
      type="text"
    />
    <input className="name-filter-button" type="button" value="Search" />
  </div>
);

export default NameFilter;
