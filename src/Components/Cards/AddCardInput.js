import './AddCardInput.css'

const AddCardInput = ({addListVisibility, setListText, listText}) => {

    const textAreaHandler = (e) => {
        setListText(e.target.value)
    }
   

    return (
            <form className="col s12" id={addListVisibility + ' add-card-form'} style={{display: `${addListVisibility}`}}>
                    <div className="input-field col s6">
                        <i className="material-icons prefix" id="text-icon">mode_edit</i>
                        <textarea className="text-field" id="text-field" onChange={textAreaHandler} value={listText}></textarea>
                    </div>
            </form>
    );
}

export default AddCardInput