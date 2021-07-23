import './ListInput.css'
import React,{useState} from 'react'

const ListInput = ({inputVisibility, cardText, setNewCardText}) => {


    const cardInputHandler = (e) => {
        setNewCardText(e.target.value)
    }

    return (
            <form className="col s12" id={inputVisibility} style={{display: `${inputVisibility}`}}>
                    <div className="input-field col s6">
                        <i className="material-icons prefix" id="text-icon">mode_edit</i>
                        <textarea className="text-field" id="text-field" onChange={cardInputHandler} value={cardText}></textarea>
                    </div>
            </form>
    );
}

export default ListInput