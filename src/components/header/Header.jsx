import Navigation from "../navigation/Navigation";
import '../../styles/header.scss';
const Header = () => {
  return (
    <header className="df-i">
      <div className="logo">Marc raphael.</div>
      <div className="menu-btn df-c">
        <button type="button" className="df-c">
          <span></span><span></span><span></span>
        </button>
      </div>
      <Navigation />
    </header>
  )
}

export default Header;
