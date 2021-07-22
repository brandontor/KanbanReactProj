import "./Lists.css";
import ListHeader from "./ListsUI/ListHeader";
import ListImg from "./ListsUI/ListImg";
import Cards from "../Cards/Cards";
import ListFooter from "./ListsUI/ListFooter";


const Lists = () => {

  

  return (
    <div className='list-items'>
      <ListHeader></ListHeader>
      <ListImg></ListImg>
      <Cards></Cards>
      <ListFooter></ListFooter>
    </div>
  );
};

export default Lists;
