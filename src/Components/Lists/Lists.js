import "./Lists.css";
import ListHeader from "./ListsUI/ListHeader";
import ListImg from "./ListsUI/ListImg";
import ListCard from "./ListsUI/ListCard"
import ListInput from "./ListsUI/ListInput";
import React, { useState } from "react";



const Lists = ({ listName, randomImg, setListName, listTitle, list}) => {


  const [newCardTask, setNewCardTask] = useState([])
  const [cardText, setNewCardText] = useState()
  const [inputVisibility, setInputVisibility] = useState("none")

  const showInputHandler = () => {
    if (inputVisibility === "none") {
      setInputVisibility("block")
    } else if (inputVisibility === "block") {
      setInputVisibility("none")
    }
  }

  const addNewCardHandler = () => {
    if (cardText === '') {
      alert('Empty field')
    } else {
      setNewCardTask([
        ...newCardTask,
        {
          card: cardText,
          id: Math.random() * 1000
        }
      ])
      setNewCardText('')
      showInputHandler()
    }
  }

  

  return (
    <div className='list-items'>
      <div className='list-items-wrapper'>
        <ListHeader listTitle={listTitle} setListName={setListName} listName={listName} list={list}></ListHeader>
        <ListImg randomImg={randomImg}></ListImg>
        {newCardTask.map(card => (
          <ListCard cardText={card.card} setNewCardTask={setNewCardTask} newCardTask={newCardTask} key={card.id}></ListCard>
        ))}
        <div className='list-footer'>
          <ListInput inputVisibility={inputVisibility} cardText={cardText} setNewCardText={setNewCardText}></ListInput>
          <div className="list-footer-card-wrapper">
            <button className="waves-effect waves-light btn-small #9e9e9e grey add-list-card" onClick={showInputHandler}>Add Card</button>
            <button className="waves-effect waves-light btn-small add-list-card" style={{ display: `${inputVisibility}` }} onClick={addNewCardHandler}>Add</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Lists;
