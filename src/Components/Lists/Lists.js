import "./Lists.css";
import ListHeader from "./ListsUI/ListHeader";
import ListImg from "./ListsUI/ListImg";
import ListFooter from "./ListsUI/ListFooter";


const Lists = () => {



  return (
    <div className='list-items'>
      <div className='list-items-wrapper'>
        <ListHeader></ListHeader>
        <ListImg></ListImg>
        <ListFooter></ListFooter>
      </div>
    </div>
  );
};

export default Lists;
