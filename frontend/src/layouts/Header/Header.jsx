import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      {/* Brand Icon */}
      <nav className="header__nav container">
        <h2 className="header__brand-name">Trello</h2>
        <div className="header__search-div">
          <input
            className="header__input-search"
            type="search"
            name="search"
            id="search"
            placeholder="search"
          />
          <button className="header__btn-create">create</button>
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
