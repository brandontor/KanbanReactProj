import "./HeaderBar.css";

const HeaderBar = ({listName, setListName, searchTerm, setSearchTerm}) => {
  
  const searchBarHandler = (e) => {
    console.log(e.target.value)
    setSearchTerm(e.target.value)
  }
 

  return (

    <div className="nav-wrapper mainheader">
      <form>
        <div className="input-field" id="input-field">
          <input id="search" type="text" placeholder="Search Lists..." onChange={searchBarHandler}></input>
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
        </div>
      </form>

      <h1 className="brand-logo">Brello<i class="fab fa-angellist"></i></h1>
    </div>

  );
};

export default HeaderBar;
