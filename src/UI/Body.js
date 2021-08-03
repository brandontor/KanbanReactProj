import "./Body.css";
import Main from "./Main";
import HeaderBar from "./HeaderBar";
import React, { useState } from "react";


const Body = () => {

  const [listName, setListName] = useState([]);
  const [searchTerm, setSearchTerm] =useState()

  return (
    <div className="body">
      <HeaderBar listName={listName} setListName={setListName} searchTerm={searchTerm} setSearchTerm={setSearchTerm}></HeaderBar>
      <Main listName={listName} setListName={setListName} searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Main>
    </div>
  );
};

export default Body;
