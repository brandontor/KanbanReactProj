import './Main.css'
import Lists from '../Components/Lists/Lists';
import AddCard from '../Components/Cards/AddCard'


const Main = ({ listName, setListName, searchTerm, setSearchTerm}) => {

   console.log(searchTerm)

    return (
        <div className='main'>
            {listName.filter(function(list) {
                if (searchTerm === undefined) {
                    return list
                } else if (list.list.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return list
                } else {
                    return false
                }
            }).map(list => (
                <Lists listTitle={list.list} listName={listName} setListName={setListName} key={list.id} list={list}></Lists>
            ))}
            <AddCard listName={listName} setListName={setListName}></AddCard>
        </div>
    );
}

export default Main