import "./HeaderBar.css";

const HeaderBar = () => {
  //Basic static Header component, in the future I may return and add a searchbar. 


  return (

    <div className="nav-wrapper mainheader">
      <h1 className="brand-logo">Brello<i className="fab fa-angellist"></i></h1>
      <a className="github" href="https://github.com/brandontor/KanbanReactProj"><p>Read Me <i className="fab fa-github"></i></p></a>
    </div>

  );
};

export default HeaderBar;
