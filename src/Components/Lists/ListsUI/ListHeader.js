import './ListHeader.css'

const ListHeader = ({listName}) => {
    return (
        <div className="list-header">
            <h2>{listName}</h2>
        </div>
    );
}

export default ListHeader 