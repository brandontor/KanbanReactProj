import './ListInput.css'

const ListInput = ({inputVisibility}) => {

    console.log(inputVisibility)

    return (
            <form className="col s12" id={inputVisibility} style={{display: `${inputVisibility}`}}>
                    <div className="input-field col s6">
                        <i className="material-icons prefix" id="text-icon">mode_edit</i>
                        <textarea className="text-field" id="text-field"></textarea>
                    </div>
            </form>
    );
}

export default ListInput