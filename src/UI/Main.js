import './Main.css'
import Lists from '../Components/Lists/Lists';
import AddCard from '../Components/Cards/AddCard'


const Main = ({ listName, setListName}) => {

    //Here I am mapping my lists inside the Main component, my AddCard component is also located here.
   
    return (
        <div className='main'>
            {listName.map(list => (
                <Lists listTitle={list.list} listName={listName} setListName={setListName} key={list.id} list={list}></Lists>
            ))}
            <AddCard listName={listName} setListName={setListName}></AddCard>
        </div>
    );
}

export default Main