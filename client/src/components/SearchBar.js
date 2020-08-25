import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Input } from "reactstrap";

const SearchBar = ({ returnSearch }) => {
  // We need some state to handle the movie search term
  const [searchTerm, setSearchTerm] = useState("");

  // Update the state for the search term
  const getCurrentSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle the form submission - send the search to the callback passed as props
  const onFormSubmit = (e) => {
    e.preventDefault();
    // send the search term to the callback in the parent to this component - if this was a more complex app, we'd be using redux or context
    returnSearch(searchTerm);
  };

  return (
    <Form
      onSubmit={(e) => onFormSubmit(e)}
      style={{
        display: "flex",
        width: "70%",
        margin: "0 auto",
        marginTop: "20px",
      }}
    >
      {/* Contorlled input component */}
      <Input
        type="text"
        placeholder="Enter a movie name, genre, etc."
        onChange={(e) => getCurrentSearch(e)}
        value={searchTerm}
        style={{
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
        }}
      />
      <button
        className="btn btn-primary"
        onSubmit={(e) => onFormSubmit(e)}
        style={{
          backgroundColor: "#343a40",
          border: "none",
          borderTopLeftRadius: "0",
          borderBottomLeftRadius: "0",
        }}
      >
        submit
      </button>
    </Form>
  );
};

// PropTypes and default props are essential for debugging and for clean code and for good error handling

// Default props
SearchBar.defaultProps = {
  returnSearch: "best movies",
};

// Proptypes
SearchBar.propTypes = {
  returnSearch: PropTypes.func.isRequired,
};

export default SearchBar;
