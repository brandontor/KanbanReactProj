import './ListHeader.css'

const ListHeader = ({listName, setListName, listTitle, list}) => {


    const deleteListHandler = () => { //this function is responsible for deleting lists onClick
        setListName(listName.filter(el => el.id !== list.id))
    }

    return (
        <div className="list-header">
            <h2>{listTitle}</h2>
            <i class="fas fa-times" onClick={deleteListHandler}></i>
        </div>
    );
}

export default ListHeader 