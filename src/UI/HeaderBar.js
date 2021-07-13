import "./HeaderBar.css";

const HeaderBar = () => {
  return (
    <div class="nav-wrapper mainheader">
      <form>
        <div class="input-field">
          <input id="search" type="search" required placeholder="Search Lists..."></input>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
        </div>
      </form>

      <a href="#" class="brand-logo">Brello</a>
    </div>

  );
};

export default HeaderBar;
