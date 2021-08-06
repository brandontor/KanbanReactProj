import './ListInput.css'

const ListInput = ({inputVisibility, cardText, setNewCardText}) => {


    const cardInputHandler = (e) => { //this function is responsible for lifting the cardText state up to the List
        setNewCardText(e.target.value)
    } 

    return (
            <form className="col s12" id={inputVisibility} style={{display: `${inputVisibility}`}}>
                    <div className="input-field col s6">
                        <i className="material-icons prefix" id="text-icon">mode_edit</i>
                        <textarea className="text-field" id="text-field" onChange={cardInputHandler} value={cardText} placeholder='Set Card Name'></textarea>
                    </div>
            </form>
    );
}

export default ListInput