import './Main.css'
import Lists from '../Components/Lists/Lists';
import AddCard from '../Components/Cards/AddCard'

const Main = () => {
    return (
        <div className='main'>
            <Lists></Lists>
            <AddCard></AddCard>
        </div>
    );
}

export default Main