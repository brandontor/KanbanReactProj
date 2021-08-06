import './ListCard.css'
import React,{useState} from 'react'

const ListCard = ({ cardText, newCardTask, setNewCardTask}) => {

    const [underLineStyle, setUnderLineStyle] = useState({ //this state contains styling for card completion
        textDecoration: 'none',
    })

    const completeCardHandler = () => { //will mark the card complete on click 
        if(underLineStyle.textDecoration === 'none') {
            setUnderLineStyle({
                textDecoration: 'line-through',
                color: 'green'
            })
        } else if(underLineStyle.textDecoration === 'line-through') { //validation - if the card is already marked complete you can unmark complete
            setUnderLineStyle({
                textDecoration: 'none',
                color: 'inherit'
            })
        }
    }
    

    const deleteCardHandler = (e) => { //delete cards
        
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