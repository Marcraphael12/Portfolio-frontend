import { NavLink } from 'react-router-dom';
import '../../styles/navigation.scss';
const Navigation = () => {
  return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About me</NavLink>
          </li>
          <li>
            <NavLink to="/">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/">Blog</NavLink>
          </li>

          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Navigation;
