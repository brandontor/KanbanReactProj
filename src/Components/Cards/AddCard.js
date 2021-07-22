import React, { useState } from 'react';
import AddCardInput from './AddCardInput'
import './AddCard.css'

const AddCard = () => {

    const [addListVisibility, setListVisibility] = useState("none")

    const addListHandler = () => {
        if (addListVisibility == "none") {
            setListVisibility("block")
        } else if (addListVisibility == "block") {
            setListVisibility("none")
        }
    }

    return (
        <div>
            <div className="add-card">
                <AddCardInput addListVisibility={addListVisibility}></AddCardInput>
            </div>
            <div className="btn-container">
                <button className="waves-effect waves-light btn-small #9e9e9e grey add-card-btn" onClick={addListHandler}>Add List</button>
                <button className="waves-effect waves-light btn-small add-card-btn" style={{ display: `${addListVisibility}` }}>Add</button>
            </div>
        </div>
    );
}

export default AddCard