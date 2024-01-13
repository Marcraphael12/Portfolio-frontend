import Navigation from "../navigation/Navigation";
import '../../styles/header.scss';
const Header = () => {
  return (
    <header className="df-i">
      <div className="logo">

        {/* While waiting for a new log image */}
        <span>
          Simple
        </span>
        <span>
          Code
        </span>
      </div>
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
