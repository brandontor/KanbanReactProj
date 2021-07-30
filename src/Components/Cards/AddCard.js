import React, { useState } from 'react';
import AddCardInput from './AddCardInput'
import './AddCard.css'

const AddCard = ({ setListName, listName }) => {

    const [addListVisibility, setListVisibility] = useState("none");
    const [listText, setListText] = useState('')

    const addListHandler = () => {
        if (addListVisibility == "none") {
            setListVisibility("block")
        } else if (addListVisibility == "block") {
            setListVisibility("none")
        }
    }

    const addListSubmitHandler = (e) => {
        if(listText == ''){
            alert('Empty field')
        } else {
            setListName([
                ...listName,
                {
                    list: listText,
                    id: Math.floor(Math.random() * 1000)
                }
            ])

            setListText('')
            addListHandler()
        }  
    }


    return (
        <div className="add-card-wrapper">
            <div className="add-card">
                <AddCardInput addListVisibility={addListVisibility} setListText={setListText} listText={listText}></AddCardInput>
            </div>
            <div className="btn-container">
                <button className="waves-effect waves-light btn-small #9e9e9e grey add-card-btn" onClick={addListHandler}>Add List</button>
                <button className="waves-effect waves-light btn-small add-card-btn" style={{ display: `${addListVisibility}` }} onClick={addListSubmitHandler}>Add</button>
            </div>
        </div>
    );
}

export default AddCard