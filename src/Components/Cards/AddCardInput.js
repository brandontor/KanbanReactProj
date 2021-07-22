import './AddCardInput.css'

const AddCardInput = ({addListVisibility}) => {

    

    return (
            <form className="col s12" id={addListVisibility} style={{display: `${addListVisibility}`}}>
                    <div className="input-field col s6">
                        <i className="material-icons prefix" id="text-icon">mode_edit</i>
                        <textarea className="text-field" id="text-field"></textarea>
                    </div>
            </form>
    );
}

export default AddCardInput