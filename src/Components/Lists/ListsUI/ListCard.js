import './ListCard.css'
import React,{useState} from 'react'

const ListCard = ({ cardText, newCardTask, setNewCardTask}) => {

    const [underLineStyle, setUnderLineStyle] = useState({
        textDecoration: 'none',
    })

    const completeCardHandler = () => {
        if(underLineStyle.textDecoration == 'none') {
            setUnderLineStyle({
                textDecoration: 'line-through',
                color: 'green'
            })
        } else if(underLineStyle.textDecoration == 'line-through') {
            setUnderLineStyle({
                textDecoration: 'none',
                color: 'inherit'
            })
        }
    }
    

    const deleteCardHandler = (e) => {
        
        setNewCardTask(newCardTask.filter(el => el.card !== e.currentTarget.parentElement.parentElement.textContent))
    }

    return (
        <div className="new-list-card">
            <p style={underLineStyle}>{cardText}</p>
            <div className="icon-holder">
                <i class="far fa-check-square" onClick={completeCardHandler}></i>
                <i class="far fa-minus-square" onClick={deleteCardHandler}></i>
            </div>
        </div>
    );
}

export default ListCard