import React, { useState } from 'react';
import AddCardInput from './AddCardInput'
import './AddCard.css'

const AddCard = ({ setListName, listName }) => {

    const [addListVisibility, setListVisibility] = useState("none"); //this state contains styling for the text area button 
    const [listText, setListText] = useState('') //this state contains the text which will be collected from the text area

    let buttonText = 'Add List' //default text for button when there are no lists

    if (listName === '') { //validation - this will change the text to Add List if there are already other lists
        buttonText = 'Start'
    } else {
        buttonText = 'Add List'
    }

    const addListHandler = () => { //this function is responsible for displaying or hiding the text area
        if (addListVisibility === "none") {
            setListVisibility("block")
        } else if (addListVisibility === "block") {
            setListVisibility("none")
        }
    }

    const addListSubmitHandler = (e) => { //this will add to the listName array 
        if(listText === ''){ //validation to ensure no array items with empty text
            alert('Empty field')
        } else {
            setListName([
                ...listName,
                {
                    list: listText,
                    id: Math.floor(Math.random() * 1000)
                }
            ])

            setListText('') //reset text 
            addListHandler()// hide text area after submit
        }  
    }


    return (
        <div className="add-card-wrapper">
            <div className="add-card">
                <AddCardInput addListVisibility={addListVisibility} setListText={setListText} listText={listText}></AddCardInput>
            </div>
            <div className="btn-container">
                <button className="waves-effect waves-light btn-small #9e9e9e grey add-card-btn" onClick={addListHandler}>{buttonText}</button>
                <button className="waves-effect waves-light btn-small add-card-btn" style={{ display: `${addListVisibility}` }} onClick={addListSubmitHandler}>Add</button>
            </div>
        </div>
    );
}

export default AddCard