import './ListFooter.css'
import ListInput from './ListInput';
import React, {useState} from "react";

const ListFooter = () => {

    const [inputVisibility, setInputVisibility] = useState("none")

    const showInputHandler = () => {
        if (inputVisibility == "none") {
            setInputVisibility("block")
        } else if(inputVisibility == "block") {
            setInputVisibility("none")
        }
    }

    return (
        <div className='list-footer'>
            <ListInput inputVisibility={inputVisibility}></ListInput>
            <button className="waves-effect waves-light btn-small #9e9e9e grey add-list-card" onClick={showInputHandler}>Add Card</button>
        </div>
    )
};

export default ListFooter