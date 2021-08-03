import "./Body.css";
import Main from "./Main";
import HeaderBar from "./HeaderBar";
import React, { useState } from "react";


const Body = () => {

  const [listName, setListName] = useState([]);

  return (
    <div className="body">
      <HeaderBar></HeaderBar>
      <Main listName={listName} setListName={setListName}></Main>
    </div>
  );
};

export default Body;
