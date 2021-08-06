import './AddCardInput.css'

const AddCardInput = ({addListVisibility, setListText, listText}) => {

    const textAreaHandler = (e) => { //responsible for lifting listText state up to the list component
        setListText(e.target.value)
    }
   

    return (
            <form className="col s12" id={addListVisibility + ' add-card-form'} style={{display: `${addListVisibility}`}}>
                    <div className="input-field col s6">
                        <i className="material-icons prefix" id="text-icon">mode_edit</i>
                        <textarea className="text-field" id="text-field" onChange={textAreaHandler} value={listText} placeholder='Set List Name'></textarea>
                    </div>
            </form>
    );
}

export default AddCardInput