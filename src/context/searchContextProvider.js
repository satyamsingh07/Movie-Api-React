import React, { useState } from "react";
import SearchContext from "./searchContext";

function SearchContextProvider(props) {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch,title,setTitle }}>
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
