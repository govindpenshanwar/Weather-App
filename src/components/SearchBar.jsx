import React, { useState } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row items-center justify-center gap-8"
    >
      <div className="relative border rounded-3xl py-2 w-2/5">
        <span className="float-start ml-4 mt-1 p-1">
          <SearchSharpIcon fontSize="large" color="primary" />
        </span>

        <input
          className="p-1 float-start mt-1 font-semibold text-xl outline-none ml-4 "
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search Location"
        />

        <button type="submit" className=" float-end mr-4 mt-1 p-1">
          <GpsFixedIcon color="action" fontSize="large" />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
