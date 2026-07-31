import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      {/* Brand Icon */}
      <h2 className="header__brand-name">Kanban Board</h2>
      <nav className="header__nav">
        <div className="header__search-div">
          <input className="header__input-search" type="search" name="search" id="search" />
          <button className="header__button-create">create</button>
        </div>
        <ul className="header__list">
          <li className="header__list-icons">notifications</li>
          <li className="header__list-icons">information</li>
          <li className="header__list-icons">account</li>
        </ul>
      </nav>
    </header>
  );
};
