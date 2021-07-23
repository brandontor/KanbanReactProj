import './Main.css'
import Lists from '../Components/Lists/Lists';
import AddCard from '../Components/Cards/AddCard'


const Main = ({ listName, setListName }) => {


    return (
        <div className='main'>
            {listName.map(list => (
                <Lists listName={list.list}></Lists>
            ))}
            <AddCard listName={listName} setListName={setListName}></AddCard>
        </div>
    );
}

export default Main