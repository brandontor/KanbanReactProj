import "./Lists.css";
import ListHeader from "./ListsUI/ListHeader";
import ListImg from "./ListsUI/ListImg";
import ListCard from "./ListsUI/ListCard"
import ListInput from "./ListsUI/ListInput";
import React, { useState } from "react";



const Lists = ({ listName, randomImg, setListName, listTitle, list}) => {

  
  const [newCardTask, setNewCardTask] = useState([])  //newCardTask state will contain an array of all the cards added under the list
  const [cardText, setNewCardText] = useState() //cardText state will store the text that goes inside the card
  const [inputVisibility, setInputVisibility] = useState("none") //inputVisibility holds input styling which will be changed onClick

  
  const showInputHandler = () => { //This function will pass styling to the text area
    if (inputVisibility === "none") { //if the element is hidden - display it or vice versa
      setInputVisibility("block")
    } else if (inputVisibility === "block") {
      setInputVisibility("none")
    }
  }


  
  const addNewCardHandler = () => {   //This function is responsible for creating a new array item in the newCardTask state
    if (cardText === '') {  //text validation, this ensures that the user does not input an empty card name
      alert('Empty field')
    } else {
      setNewCardTask([
        ...newCardTask, //rest operator will ensure any previous array items remain in the array.
        {
          card: cardText, //array will only include the card text and a key
          id: Math.random() * 1000
        }
      ])
      setNewCardText('') //reset the empty text field
      showInputHandler() //hide the input area after submission
    }
  }

  

  return (
    <div className='list-items'>
      <div className='list-items-wrapper'>
        <ListHeader listTitle={listTitle} setListName={setListName} listName={listName} list={list}></ListHeader>
        <ListImg randomImg={randomImg}></ListImg>
        {newCardTask.map(card => ( //mapping new card components here based on what is in the array and passing props
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
