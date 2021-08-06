import "./Body.css";
import Main from "./Main";
import HeaderBar from "./HeaderBar";
import React, { useState } from "react";


const Body = () => {

  //storing listName state here as in the future I may return to add a search function and
  //it will need to be added to the HeaderBar as a prop
  const [listName, setListName] = useState([]);

  return (
    <div className="body">
      <HeaderBar></HeaderBar>
      <Main listName={listName} setListName={setListName}></Main>
    </div>
  );
};

export default Body;
