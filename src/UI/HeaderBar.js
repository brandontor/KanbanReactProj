import "./HeaderBar.css";

const HeaderBar = () => {
  return (
    <div className="nav-wrapper mainheader">
      <form>
        <div className="input-field">
          <input id="search" type="search" required placeholder="Search Lists..."></input>
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
        </div>
      </form>

      <h1 className="brand-logo">Brello<i class="fab fa-angellist"></i></h1>
    </div>

  );
};

export default HeaderBar;
