import Navigation from "../navigation/Navigation";
const Header = () => {
  return (
    <header>
      <div className="logo">Marc raphael.</div>
      <div className="menu-btn">
        <button type="button">
          ≡
        </button>
      </div>
      <Navigation />
    </header>
  )
}

export default Header;
