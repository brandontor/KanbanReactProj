import './ListCard.css'

const ListCard = ({ cardText }) => {

    

    const checkHandler = () => {
        
    }

    return (
        <div className="new-list-card">
            <p>{cardText}</p>
            <div className="icon-holder">
                <i class="far fa-check-square" onClick={checkHandler}></i>
                <i class="far fa-minus-square"></i>
            </div>
        </div>
    );
}

export default ListCard